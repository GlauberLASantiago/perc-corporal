# Percorporalizando

**Sequenciador Interativo de Percussão Corporal com Visualização 3D e Partitura Dinâmica**

O **Percorporalizando** é um aplicativo educacional interativo voltado para o aprendizado e prática de percussão corporal. Desenvolvido pelo professor **Glauber Santiago** (DAC/UFSCar), o projeto combina simulação tridimensional, síntese de áudio, geração de partitura dinâmica e ferramentas pedagógicas de aprendizado rítmico.

---

## 🚀 Recursos Principais

### 1. Dois Modos de Sequenciador (Timeline)
O sequenciador oferece duas formas de visualizar e editar os ritmos criados:
*   **Vista Lateral (Lados ESQ/DIR)**:
    *   A timeline exibe as raias de membros **Esquerdo (ESQ)** e **Direito (DIR)**, além das raias de **Deslocamento (DESL)** e **Giro (GIRO)** do corpo.
    *   O usuário seleciona o som corporal no menu unificado (Pé, Coxa, Peito, Palma ou Estalo) e clica na célula da linha do tempo correspondente.
    *   Permite a visualização completa da coreografia no palco 3D.
*   **Vista Instrumental (Sons)**:
    *   A timeline exibe raias individuais para cada som corporal: **Estalo (EST)**, **Peito (PEI)**, **Palma (PAL)**, **Coxa (COX)** e **Pé (PÉ)**.
    *   Clicar sucessivamente em uma célula altera ciclicamente a lateralidade: **Esquerda (E)**, **Direita (D)**, **Ambos (E+D)** e **Vazio**.
    *   Neste modo, a simulação 3D do avatar permanece estacionária na posição inicial para foco estrito na rítmica sonora.

### 2. Partitura Corporal Dinâmica (SVG)
Uma janela flutuante que desenha em tempo real a partitura rítmica correspondente aos sons preenchidos na timeline:
*   Exibe raias paralelas para cada voz corporal, com figuras de notas e pausas equivalentes (semibreves, mínimas, semínimas, colcheias, etc.).
*   Os símbolos adaptam-se automaticamente à fórmula de compasso selecionada (2/4, 3/4, 4/4 ou 6/8).
*   Inclui um marcador visual (playhead) sincronizado com a execução do áudio para acompanhamento de leitura.

### 3. Palco 3D Interativo e Mostruário de Avatares
*   **🎭 Mostruário de Avatares 3D**:
    *   **🎨 Boneco de Madeira (Manequim Artístico - Recomendado)**: O clássico manequim articulado de ateliê em madeira nobre torneada (faia e nogueira). Totalmente livre de estranheza (*uncanny valley*), acolhedor, elegante e ideal para ambientes de educação musical.
    *   **🤖 Mascote Robô (Astro Bot)**: Robozinho simpático e carismático com chassi branco perolado, visor escuro com olhinhos felizes luminosos `( ^ _ ^ )` e núcleo percussivo no peito.
    *   **🎓 Estudante Casual**: Personagem jovem estilizado com camiseta colorida, calça jeans casual e tênis esportivos modernos (*sneakers*).
    *   **✨ Minimalista Nórdico**: Estética limpa de ateliê com geometria pura, tons foscos harmoniosos (ardósia, terracota e sálvia) e detalhes em bronze escovado.
    *   **🦾 Manequim GLB (Técnico)**: Modelo 3D com malha contínua e esqueleto de ossos (*rigging* Mixamo).
    *   **📁 Carregador de Modelos Customizados**: Permite carregar qualquer arquivo `.glb` ou `.gltf` do computador diretamente pela interface do mostruário.
*   **Modo Turma**: Permite alternar a simulação entre modo Solo, Fileiras ou Roda/Círculo.
*   **Efeito Coletivo**: No modo turma, é aplicado um leve atraso espacial (delay e reverb) para emular o som acústico de um grupo de pessoas tocando em uma sala de aula.

### 4. Camada Melódica e Áudio
*   **Melodia Pentatônica**: Gera uma melodia monofônica paralela para Marimba (escala pentatônica de Dó maior) baseada na rítmica corporal programada.
*   **Timbres Ricos**: Suporte a WebAudioFont, Soundfont Player ou sintetizador interno como fallback.
*   **Controles de Áudio**: Ajuste fino de BPM (tempo), metrônomo individual e slider de compensação de atraso visual (Atraso BT) para fones/caixas Bluetooth.

### 5. Atalhos de Edição Rápida
*   **Clique Cíclico**: Clicar na mesma célula preenchida avança ciclicamente para o próximo valor de som (Vista Lateral) ou de lateralidade (Vista Instrumental).
*   **Clique Duplo**: Limpa a célula de forma instantânea.
*   **Confirmação ao Limpar**: Evita exclusões acidentais com pop-up de confirmação ao acionar o botão "Limpar tudo".

### 6. Exportação e Compartilhamento
*   **Salvar/Carregar (JSON)**: Exportação e importação de padrões rítmicos locais.
*   **MIDI**: Exportação da melodia (canal 1) e da rítmica percussiva (canal 10) em arquivos `.mid`.
*   **Certificado de Criação (PNG)**: Gera uma imagem de alta resolução com a partitura e os dados do aluno para envio rápido de tarefas escolares.

---

## 🛠️ Tecnologias Utilizadas

*   **Estrutura**: HTML5 semântico
*   **Estilo**: Vanilla CSS (layout responsivo e design escuro premium no palco 3D)
*   **Gráficos 3D**: Three.js (com OrbitControls para manipulação da câmera)
*   **Áudio**: Web Audio API (gerenciamento de buffers de áudio, panning estéreo, convolução de reverb e delay)
*   **Melodia Pentatônica**: WebAudioFontPlayer e soundfont-player
*   **Partitura**: Renderização dinâmica SVG baseada nas durações rítmicas
*   **Ícones**: Emojis unicode nativos

---

## 📦 Como Usar

1.  Abra o arquivo `index.html` em qualquer navegador web moderno.
2.  Clique em **🛠️ Abrir Sequenciador** na barra inferior para exibir a timeline.
3.  Preencha as células com ritmos. Use o botão **🎛️ Vista** para alternar o layout da timeline e o botão **🎼 Abrir partitura** para visualizar a notação musical.
4.  Clique em **▶ Play** para escutar e ver a simulação 3D em tempo real.
5.  Use a seção **Aprender ritmos** para carregar exercícios rítmicos pré-configurados.
