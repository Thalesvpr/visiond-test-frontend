
# Estrutura do Projeto

Este documento descreve a estrutura de diretórios e arquivos do projeto de sistema de formulários dinâmicos, explicando a finalidade de cada componente principal e como as rotas são configuradas.

## Visão Geral

A estrutura do projeto foi organizada para promover a clareza e a facilidade de manutenção. Abaixo, você encontrará uma visão geral dos diretórios e arquivos mais importantes:

```plaintext
/visiond-test-frontend
├── /public                # Arquivos estáticos e publicos
├── /src
│   ├── /components        # Componentes reutilizáveis do React
│   ├── /services          # Serviços para comunicação com APIs
│   ├── /pages             # Componentes de página do React
│   ├── App.tsx            # Componente raiz do React
│   ├── main.tsx           # Configuração das rotas e ponto de entrada do React
│   └── index.tsx          # Renderiza o componente raiz no DOM
├── package.json           # Dependências do projeto e scripts
├── tailwind.config.js     # Configuração do Tailwind
└── tsconfig.json          # Configurações do TypeScript

```

### Diretórios Principais

- **`/components`**: Contém todos os componentes reutilizáveis do React.
- **`/services`**: Agrupa os serviços que lidam com a lógica de comunicação externa.
- **`/pages`**: Inclui os componentes que representam páginas inteiras dentro do aplicativo.
- **`/utils`**: Oferece um espaço para funções utilitárias.

### Arquivos Importantes

- **`App.tsx`**: O componente principal que engloba a configuração de rotas e a estrutura geral do aplicativo.
- **`main.tsx`**: Ponto de entrada do aplicativo que inclui a configuração das rotas usando `react-router-dom`. Define rotas para as páginas do aplicativo e utiliza o componente `PrivateRoute` para proteger acessos a páginas que requerem autenticação.

## Rotas

As rotas do aplicativo são configuradas no arquivo `main.tsx`, utilizando `createBrowserRouter` e `RouterProvider` do `react-router-dom`. Cada rota é mapeada para um componente específico, organizando o fluxo de navegação dentro do aplicativo.

- Rotas como `/login`, `/register`, e `/forms` direcionam o usuário para as respectivas páginas.
- `PrivateRoute` é usado para envolver rotas que exigem autenticação do usuário, garantindo que apenas usuários logados possam acessá-las.

## Boas Práticas

- Mantenha os componentes pequenos e focados em uma única responsabilidade.
- Nomeie os arquivos e diretórios de forma clara e consistente.
- Separe a lógica de UI da lógica de negócios, mantendo os serviços e utilitários independentes dos componentes visuais.

Esta estrutura é um ponto de partida. À medida que o projeto cresce e evolui, sinta-se livre para adaptá-la às necessidades do seu projeto.
