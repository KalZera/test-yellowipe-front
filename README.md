# Test Yellowipe Front

Este é um projeto frontend React + TypeScript criado com Vite. A aplicação inclui funcionalidades de autenticação, feed de posts e uma interface moderna construída com componentes customizados.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** ou **pnpm**
- **Git**

## 🚀 Instalação e Execução Local

### 1. Clone o repositório

```bash
git clone https://github.com/KalZera/test-yellowipe-front.git
cd test-yellowipe-front
```

### 2. Instale as dependências

```bash
# Usando npm
npm install

# Ou usando yarn
yarn install

# Ou usando pnpm
pnpm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo de exemplo e configure as variáveis:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure as variáveis necessárias:

```env
VITE_API_URL=<sua-variavel>
```

### 4. Execute o projeto em modo de desenvolvimento

```bash
# Usando npm
npm run dev

# Ou usando yarn
yarn dev

# Ou usando pnpm
pnpm dev
```

A aplicação estará disponível em: `http://localhost:5173`

## 🏗️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Executa o linter para verificar a qualidade do código |

## 🛠️ Tecnologias Utilizadas

### Principais
- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool rápida para desenvolvimento frontend
- **React Router DOM** - Roteamento para aplicações React

### UI e Estilização
- **Tailwind CSS** - Framework CSS utilitário
- **ShadCn** - Biblioteca de componentes baseada em Radix UI e Tailwind CSS

### Formulários e Validação
- **React Hook Form** - Biblioteca para gerenciamento de formulários
- **Zod** - Schema de validação TypeScript-first

### Estado e HTTP
- **Zustand** - Gerenciamento de estado leve
- **Axios** - Cliente HTTP
- **js-cookie** - Manipulação de cookies

### Desenvolvimento
- **ESLint** - Linter para JavaScript/TypeScript
- **Prettier** - Formatador de código

## 📁 Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
│   ├── common/         # Componentes comuns (Header, etc.)
│   └── ui/             # Componentes de UI básicos
├── config/             # Configurações (axios, etc.)
├── context/            # Contextos React (autenticação, etc.)
├── modules/            # Módulos da aplicação
│   ├── feed/           # Módulo do feed de posts
│   └── users/          # Módulo de usuários
├── routes/             # Configuração de rotas
└── utils/              # Utilitários e helpers
```

## 🔐 Funcionalidades

- **Autenticação**: Login e registro de usuários
- **Feed de Posts**: Criação, edição e exclusão de posts
- **Roteamento Privado**: Proteção de rotas autenticadas
- **Interface Responsiva**: Design adaptável para diferentes dispositivos
- **Gerenciamento de Estado**: Estado global com Zustand e Context API

## 📝 Observações

- O módulo de `user` utiliza `react-hook-forms` para gerenciamento de formulários
- O projeto inclui configurações de ESLint e regras de lint pré-configuradas
- A aplicação utiliza cookies para persistência da autenticação

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
