# projeto-web
Projeto que propõe a criação de interfaces visuais em React em conjunto com a ferramenta Figma e com a ferramenta de IA Gemini.

Cada Pessoa será responsavel pela criação de 3 Telas que ja foram enviadas para cada pessoa pelo PO (Evandro) pelo aplicativo Whatsapp

Ao Final do Projeto deverá ser entregue 18 telas no total, além de um relatorio retratando todas as dificuldades e evoluçoes que oorreram durante todo esse percurso!


Tema do Projeto: Doador Pessoa Física
Link do Figma (Copiar e Colar no navegador): https://www.figma.com/design/ZXMLSCjN4TEk9YgyiZgo17/Sprint-Reutiliza-?node-id=0-1&t=90aUe33i6pcbqpU9-1


==============================================================================================================================================================================
Estrutura do "src" do Projeto 

src/
├── assets/          # Imagens, fontes, SVGs
├── components/      # Componentes reutilizáveis (Button, Card, Input)
├── pages/           # As 3 telas de cada pessoa (ex: Login.jsx, Profile.jsx)
├── routes/          # Configuração das rotas (opcional, mas recomendado)
├── styles/          # Estilos globais (App.css, index.css)
└── App.jsx          # Componente principal que gerencia as rotas
└── main.jsx         # Ponto de entrada da aplicação
└── index.css        # Configuração inicial e fundamental do estilo da sua aplicação
==============================================================================================================================================================================

Explicação dos Arquivos

## 📂 Estrutura de Pastas

O projeto utiliza uma estrutura de pastas organizada para separar responsabilidades, facilitando a manutenção e a escalabilidade.

- **`/public`**: Contém arquivos estáticos (como o `favicon.ico`) que são servidos diretamente pelo navegador, sem passar pelo processo de build do Vite.

- **`/src`**: O coração do projeto, onde todo o código-fonte da aplicação reside.
  - **`/assets`**: Armazena recursos como imagens, SVGs e fontes que são importados e processados pelos componentes.
  - **`/components`**: Contém componentes React reutilizáveis que formam os blocos de construção da UI (ex: `Button`, `Card`, `Input`).
  - **`/pages`**: Componentes que representam uma página/tela inteira da aplicação (ex: `HomePage`, `LoginPage`). Eles organizam vários componentes menores.
  - **`/routes`**: Centraliza a configuração das rotas da aplicação, definindo qual página é renderizada para cada URL.
  - **`App.jsx`**: O componente principal que envolve toda a aplicação. Geralmente contém o layout geral (header, footer) e o sistema de rotas.
  - **`main.jsx`**: O ponto de entrada da aplicação. É responsável por renderizar o componente `App` na `div#root` do `index.html`.
  - **`index.css`**: Arquivo para estilos **globais**, como reset CSS, variáveis de tema (cores, fontes) e estilos para a tag `<body>`.

- **`index.html`**: O único arquivo HTML da aplicação (SPA). Serve como o "molde" onde a aplicação React é injetada.

- **`package.json`**: Define os scripts do projeto (ex: `npm run dev`) e lista todas as dependências e pacotes necessários para rodar a aplicação.

==============================================================================================================================================================================