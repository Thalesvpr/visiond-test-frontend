
# Rotas

Este documento descreve a configuração de rotas no sistema de formulários dinâmicos, explicando como as páginas são organizadas e acessadas dentro do aplicativo.

O sistema utiliza `react-router-dom` para gerenciar as rotas, permitindo uma navegação eficiente entre as diversas páginas do aplicativo.

## Configuração de Rotas

A configuração das rotas é realizada no arquivo `main.tsx`, onde cada rota é mapeada para um componente específico do React. As rotas definidas incluem:

- **`/login`**: Mapeia para `LoginPage`, onde os usuários podem fazer login.
- **`/register`**: Leva à `RegisterPage`, destinada ao registro de novos usuários.
- **`/forms`**: Direciona para `MyFormsPage`, uma rota protegida que lista os formulários criados pelo usuário.
- **`/new`**: Acessa `NewForm`, permitindo aos usuários criar um novo formulário.
- **`/edit:id`**: Encaminha para `EditForm`, onde os usuários podem editar um formulário existente.
- **`/answer/:id`**: Rota para `AnswerForm`, possibilitando aos usuários responder a um formulário.

## Rota Privada

O componente `PrivateRoute` é utilizado para envolver as rotas que requerem autenticação do usuário. Caso o usuário não esteja logado, ele será redirecionado para a página de login.

```jsx
<PrivateRoute path="/forms" component={MyFormsPage} />
```

Utilizando `PrivateRoute` garante que apenas usuários autenticados possam acessar certas áreas do aplicativo, aumentando a segurança e a privacidade do sistema.

## Implementação

A implementação da configuração de rotas utiliza `createBrowserRouter` e `RouterProvider` do `react-router-dom`, facilitando a definição e o gerenciamento das rotas.

```jsx
const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  // Outras rotas
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
```

A organização e a gestão eficaz das rotas são fundamentais para a usabilidade e a manutenção do sistema de formulários dinâmicos.


- [Configuração do Ambiente](/docs/ConfiguracaoDeAmbiente.md)

- [Estrutura do Projeto](/docs/EstruturaDoProjeto.md)
- [Componentes](/docs/Componentes.md)
- [Serviços](/docs/Servicos.md)
- [Páginas](/docs/Paginas.md)

