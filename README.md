# 👏 Percorporalizando — Sequenciador de Percussão Corporal

Aplicativo web interativo para criação, visualização e ensino de **percussão corporal**. Voltado para educadores musicais e estudantes, permite montar sequências rítmicas com sons do próprio corpo (palmas, coxa, peito, pé e estalo) e visualizá-las em tempo real com um avatar 3D animado.

## ✨ Funcionalidades

- **Sequenciador visual** — timeline interativa com arrastar e soltar para posicionar cada batida
- **Avatar 3D animado** — figura humana em Three.js que executa os movimentos sincronizados com o áudio
- **Modo Turma** — exibe múltiplos avatares em fileiras ou roda, simulando uma turma em aula
- **Biblioteca de 50+ padrões rítmicos** organizados em grupos:
  - Fundamentos (semínimas e pulso)
  - Divisões (colcheias e contratempo)
  - Subdivisões e velocidade
  - Células educativas Kodály/Orff
  - Polirritmos e afrobrasileiros
  - Estilos musicais (Baião, Samba, Funk, Frevo, etc.)
- **Compassos suportados**: 3/4, 4/4 e 6/8
- **Controle de BPM** com ajuste fino por botões ou campo numérico
- **Metrônomo** e **modo loop** integrados
- **Melodia acompanhante** opcional com escalas pentatônicas e outros modos
- **Partitura rítmica** gerada automaticamente em SVG com símbolos de percussão corporal
- **Glossário** de sons corporais com demonstração em áudio
- **Exportar ritmos** — salva a sequência em formato JSON
- **Exportar MIDI** — gera arquivo MIDI da sequência criada
- **Gerar Certificado** — exporta uma imagem PNG com a partitura e os dados da sequência
- **Atraso Bluetooth** — compensação de latência para uso com caixas ou fones sem fio
- **Responsivo** — adaptado para desktop e dispositivos móveis

## 🛠️ Tecnologias

| Biblioteca | Uso |
|---|---|
| [Three.js r128](https://threejs.org/) | Renderização 3D do avatar e cena |
| [WebAudioFont](https://surikov.github.io/webaudiofont/) | Síntese de sons de melodia |
| [Soundfont Player](https://github.com/danigb/soundfont-player) | Player de fontes de áudio |
| Web Audio API | Reprodução dos sons corporais (MP3) |
| Canvas API | Geração do certificado PNG |

## 📁 Estrutura de Arquivos

```
├── index.html          # Aplicativo completo (HTML + CSS + JS)
├── padroes.js          # Biblioteca de 50+ padrões rítmicos
├── palmas.mp3          # Som: palma
├── peito.mp3           # Som: peito (centro)
├── peito-d.mp3         # Som: peito direito
├── peito-e.mp3         # Som: peito esquerdo
├── coxa-d.mp3          # Som: coxa direita
├── coxa-e.mp3          # Som: coxa esquerda
├── pe-d.mp3            # Som: pé direito
├── pe-e.mp3            # Som: pé esquerdo
├── estalo-d.mp3        # Som: estalo (clique) direito
├── estalo-e.mp3        # Som: estalo (clique) esquerdo
└── musica-demo-90bpm.mp3  # Faixa de acompanhamento demo
```

## 🚀 Como Usar

Por ser uma aplicação web estática (HTML + JS + MP3), **não é necessário instalar nada**.

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` diretamente no navegador

> ⚠️ O navegador precisa suportar a **Web Audio API** (Chrome, Firefox, Edge, Safari modernos).

### Uso local com servidor

Para evitar restrições de CORS ao carregar os arquivos de áudio localmente, recomenda-se usar um servidor simples:

```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Acesse `http://localhost:8080` no navegador.

## 🎓 Uso em Aula

1. Selecione um **padrão rítmico** da biblioteca ou monte o seu no sequenciador
2. Ajuste o **BPM** conforme o nível da turma
3. Ative o **Modo Turma** para visualizar os alunos em fileiras ou roda
4. Use a **Partitura** para mostrar a notação rítmica equivalente
5. Exporte o **Certificado** ao final da atividade

## 📄 Licença

Distribuído sem licença explícita. Entre em contato com o autor para uso comercial ou redistribuição.
