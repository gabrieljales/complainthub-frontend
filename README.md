# Projeto

Este é o README do seu projeto. Aqui você encontrará uma descrição detalhada da estrutura do diretório `src` e instruções sobre como executar o projeto.

## Estrutura do Diretório

A estrutura do diretório `src` é a seguinte:

```
src
├── App.tsx
├── assets
│   └── react.svg
├── components
│   ├── ComplaintCard
│   │   ├── ComplaintCard.tsx
│   │   └── ComplaintCard.types.ts
│   ├── ComplaintModal
│   │   ├── ComplaintForm
│   │   │   ├── ComplaintForm.enum.ts
│   │   │   ├── ComplaintForm.tsx
│   │   │   └── ComplaintForm.types.tsx
│   │   ├── ComplaintModal.tsx
│   │   └── ComplaintModal.types.ts
│   ├── Form
│   │   └── ErrorMessage
│   │       ├── ErrorMessage.tsx
│   │       └── ErrorMessage.types.ts
│   └── Navbar
│       └── Navbar.tsx
├── constants
│   └── complaintStatusLabels.ts
├── context
│   └── Auth.ts
├── helpers
│   └── api.ts
├── hooks
│   └── api
│       ├── Auth
│       │   └── AuthHooks.ts
│       └── Complaint
│           └── ComplaintHooks.ts
├── interfaces
│   └── api
│       ├── models
│       │   ├── Auth.ts
│       │   ├── Complaint.ts
│       │   └── User.ts
│       └── requests
│           ├── Auth.ts
│           └── Complaint.ts
├── main.tsx
├── models
│   ├── Auth.ts 
|   ├── Complaint.ts 
|   └── User.ts 
├-- pages 
|   |-- Auth 
|   |   |-- LoginForm 
|   |   |   |-- LoginForm.enum.ts 
|   |   |   |-- LoginForm.tsx 
|   |   |   |-- LoginForm.types.tsx 
|   |   |-- LoginScreen.tsx 
|   |-- Complaint 
|       |-- ComplaintScreen.types.ts 
|       |-- ComplaintsScreen.tsx 
├-- providers 
|   |-- Auth.tsx 
|   |-- QueryClient.tsx 
├-- routes 
|   |-- Error.tsx 
|   |-- NotFound.tsx 
|   |-- ProtectedRoute.tsx 
|   |-- Root.tsx 
|   |-- router.tsx 
├-- services 
|   |-- api 
|       |-- apiRequests.ts 
|       |-- axiosInstance.ts 
|-- auth 
|-- AuthService.ts 
|-- complaint 
|-- ComplaintService.ts 

```

### App

O arquivo `App` é o ponto de entrada do aplicativo. Ele define a estrutura básica do aplicativo e inclui as rotas para as diferentes páginas.

### Assets

O diretório `assets` contém todos os arquivos de mídia usados no aplicativo, como imagens e ícones.

### Components

O diretório `components` contém todos os componentes reutilizáveis usados em todo o aplicativo. Cada componente tem seu próprio diretório, que inclui o arquivo de componente e quaisquer arquivos relacionados, como tipos.

### Constants

O diretório `constants` contém todos os valores constantes usados em todo o aplicativo. Isso pode incluir coisas como rótulos de status de reclamação.

### Context

O diretório `context` contém todos os contextos React usados no aplicativo. Os contextos fornecem uma maneira de passar dados através da árvore de componentes sem ter que passar props manualmente em cada nível.

### Helpers

O diretório `helpers` contém funções auxiliares que são usadas em todo o aplicativo.

### Hooks

O diretório `hooks` contém todos os hooks personalizados usados no aplicativo. Os hooks permitem que você use o estado e outros recursos do React sem escrever uma classe.

### Interfaces

O diretório `interfaces` contém todas as interfaces TypeScript usadas no aplicativo.

### Models

O diretório `models` contém todas as classes de modelo usadas no aplicativo.

### Pages

O diretório `pages` contém todos os componentes de página usados nas rotas do aplicativo.

### Providers

O diretório `providers` contém todos os provedores usados no aplicativo. Os provedores encapsulam a lógica compartilhada e o estado que pode ser acessado por vários componentes.

### Routes

O diretório `routes` contém todas as rotas do aplicativo. Cada rota corresponde a uma página diferente que o usuário pode visitar.

### Services

O diretório `services` contém todos os serviços usados no aplicativo. Os serviços encapsulam a lógica de negócios e a interação com APIs externas.

### Theme

O diretório `theme` contém a configuração do tema para o aplicativo.

### Types

O diretório `types` contém todos os tipos personalizados usados no aplicativo.

## Executando o Projeto

Para executar este projeto, siga estas etapas:

1. Instale as dependências do projeto com o comando `npm install`.
2. Configure o arquivo .env, baseando-se no arquivo.env-example.
3. Inicie o servidor de desenvolvimento com o comando `npm dev`.

Os scripts disponíveis para este projeto são:

```json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint --fix --ext .js,.jsx,.ts,.tsx. .",
    "preview": "vite preview",
    "prepare": "husky install"
  }
```

Para criar uma versão de produção do aplicativo, use o comando `npm run build`.
