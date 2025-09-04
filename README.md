# Projeto Web - Doador Pessoa Física

Este projeto propõe a criação de interfaces visuais em React, utilizando como base designs pré-definidos no Figma e contando com o auxílio da ferramenta de IA Gemini para otimizar o desenvolvimento.

## 🎯 Sobre o Projeto

O objetivo principal é desenvolver uma aplicação web focada no tema de **Doadores Pessoa Física**. O trabalho é colaborativo, com cada membro da equipe responsável pela criação de 3 telas específicas, baseadas nos protótipos enviados pelo Product Owner (PO).

### Entregáveis
- **18 Telas Funcionais**: Ao final do projeto, a aplicação deverá contar com um total de 18 telas desenvolvidas em React.
- **Relatório Final**: Um documento detalhando as dificuldades encontradas, as soluções aplicadas e a evolução da equipe ao longo do projeto.

## 🎨 Design e Prototipação

Toda a base visual do projeto foi construída no Figma. Para acessar os protótipos, utilize o link abaixo:

- **[Acessar o Figma do Projeto](https://www.figma.com/design/ZXMLSCjN4TEk9YgyiZgo17/Sprint-Reutiliza-?node-id=0-1&t=90aUe33i6pcbqpU9-1)**

## 📂 Estrutura de Pastas

O projeto utiliza uma estrutura de pastas organizada para separar responsabilidades, facilitando a manutenção e a escalabilidade do código.

- **`/public`**: Contém arquivos estáticos (como o `favicon.ico`) que são servidos diretamente pelo navegador, sem passar pelo processo de build do Vite.

- **`/src`**: O coração do projeto, onde todo o código-fonte reside.
    - **`/assets`**: Armazena recursos como imagens, SVGs e fontes que são importados e processados pelos componentes.
    - **`/components`**: Contém componentes React reutilizáveis que formam os blocos de construção da UI (ex: `Button`, `Card`, `Input`).
    - **`/pages`**: Componentes que representam uma página/tela inteira da aplicação (ex: `HomePage`, `LoginPage`). Eles organizam vários componentes menores.
    - **`/routes`**: Centraliza a configuração das rotas da aplicação, definindo qual página é renderizada para cada URL.
    - **`/styles`**: Contém os arquivos de estilização globais, como `index.css` e `App.css`.
    - **`App.jsx`**: O componente principal que envolve toda a aplicação. Geralmente contém o layout geral (header, footer) e o sistema de rotas.
    - **`main.jsx`**: O ponto de entrada da aplicação. É responsável por renderizar o componente `App` na `div#root` do `index.html`.

- **`index.html`**: O único arquivo HTML da aplicação (SPA). Serve como o "molde" onde a aplicação React é injetada.

- **`package.json`**: Define os scripts do projeto (ex: `npm run dev`) e lista todas as dependências e pacotes necessários para rodar a aplicação.

## 🚀 Como Executar o Projeto

Você pode configurar o ambiente de desenvolvimento local de duas maneiras: utilizando a linha de comando (terminal) ou a interface gráfica do GitHub Desktop.

### Opção 1: Via Terminal (Linha de Comando)

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd nome-do-projeto
    ```
3.  Agora, pule para a seção **"Instalação das Dependências"** abaixo.

---

### Opção 2: Via GitHub Desktop (Interface Gráfica)

1.  **Instale o GitHub Desktop:** Certifique-se de que você tem o [GitHub Desktop](https://desktop.github.com/) instalado em seu computador.

2.  **Clone o repositório:**
    - Abra o GitHub Desktop.
    - Vá em `File > Clone Repository` (Arquivo > Clonar Repositório) no menu superior.
    - Selecione a aba `URL`, cole a URL do repositório do projeto e escolha a pasta local onde deseja salvá-lo.
    - Clique no botão `Clone`.

3.  **Abra o terminal na pasta do projeto:**
    - Com o repositório já clonado e selecionado no GitHub Desktop, vá para o menu superior em `Repository > Open in [seu terminal padrão]` (Repositório > Abrir no Terminal).
    - Isso abrirá um terminal exatamente no local correto.

4.  Agora, siga para a próxima seção.

---

### Instalação das Dependências (Passo Final)

Após clonar o projeto por qualquer um dos métodos acima, você precisa instalar as dependências.

1.  **Instale as dependências (com o terminal já na pasta do projeto):**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

Após executar o último comando, a aplicação estará disponível em `http://localhost:5173` (ou outra porta que for indicada no seu terminal).