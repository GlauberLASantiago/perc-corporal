// Cada WAV contém tomadas reais, mono, em trechos de duração igual.
const percussionBanks = {
    'Coxa':   {file:'coxa',   count:14, volume:.96},
    'Estalo': {file:'estalos',count:23, volume:.89},
    'Palma':  {file:'palmas', count:15, volume:.90},
    'Pé':     {file:'pe',     count:16, volume:1.0},
    'Peito':  {file:'peito',  count:18, volume:.98}
};

function loadPercussionBank(context, bank) {
    if (!bank.loading) {
        bank.loading = fetch('./amostras/' + bank.file + '.wav')
            .then(response => {
                if (!response.ok) throw new Error('Falha ao carregar ' + bank.file);
                return response.arrayBuffer();
            })
            .then(bytes => context.decodeAudioData(bytes))
            .then(buffer => { bank.buffer = buffer; })
            .catch(error => { bank.loading = null; throw error; });
    }
    return bank.loading;
}

function playRecordedBeat(context, output, bank, time, pan, ensemble) {
    const voices = ensemble ? 5 : 1;
    const available = Array.from({length:bank.count}, (_, i) => i);
    const duration = bank.buffer.duration / bank.count;
    const positions = [0,-.58,.52,-.32,.68];
    const levels = [.56,.34,.30,.27,.24];
    const start = Math.max(time, context.currentTime);
    for (let i=0; i<voices; i++) {
        // Sorteio sem reposição na batida. A primeira tomada também muda
        // em relação à batida anterior, inclusive quando o guia toca sozinho.
        let index = Math.floor(Math.random() * available.length);
        if (i === 0 && available[index] === bank.lastLead) index = (index+1) % available.length;
        const take = available.splice(index,1)[0];
        if (i === 0) bank.lastLead = take;
        const delay = i === 0 ? 0 : (.005 + (i-1)*.005 + Math.random()*.003);
        const gain = context.createGain();
        gain.gain.value = bank.volume * (ensemble ? levels[i] * (.93 + Math.random()*.14) : 1);
        const panner = context.createStereoPanner?.();
        if (panner) {
            panner.pan.value = ensemble ? pan*.48+positions[i] : pan;
            gain.connect(panner);
            panner.connect(output);
        } else gain.connect(output);
        const source = context.createBufferSource();
        source.buffer = bank.buffer;
        source.connect(gain);
        source.onended = () => { source.disconnect(); gain.disconnect(); panner?.disconnect(); };
        source.start(start + delay, take * duration, duration);
    }
}
