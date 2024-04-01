
# Serviços

Este documento descreve os serviços utilizados no sistema de formulários dinâmicos, incluindo detalhes sobre como interagem com as APIs e como são utilizados nos componentes e páginas do projeto.

## AuthService.ts

**Descrição**: Lida com as operações de autenticação, como login e logout.

**Métodos Principais**:
- `login(email, password)`: Realiza o login do usuário.
- `logout()`: Realiza o logout do usuário.

**Exemplo de Uso**:
```javascript
AuthService.login('email@example.com', 'password123').then(user => {
  console.log(user);
});
```

## FormService.ts

**Descrição**: Gerencia as operações relacionadas a formulários, como criação, edição e recuperação de formulários e suas respostas.

**Métodos Principais**:
- `createForm(formDetails)`: Cria um novo formulário.
- `getForms()`: Retorna todos os formulários.
- `submitFormResponse(formId, responses)`: Submete as respostas de um formulário.

**Exemplo de Uso**:
```javascript
FormService.createForm({ name: 'Novo Formulário', description: 'Descrição do formulário' }).then(form => {
  console.log(form);
});
```

## PrivateRoute.tsx

**Descrição**: Um componente utilitário que envolve as rotas que requerem autenticação, redirecionando para a página de login caso o usuário não esteja logado.

**Exemplo de Uso**:
```jsx
<PrivateRoute path="/minha-conta" component={MyAccountPage} />
```

## RegisterService.ts

**Descrição**: Encarregado do registro de novos usuários no sistema.

**Métodos Principais**:
- `register(userData)`: Registra um novo usuário com os dados fornecidos.

**Exemplo de Uso**:
```javascript
RegisterService.register({ email: 'novoemail@example.com', password: 'novaSenha123', nome: 'Novo Usuário' }).then(user => {
  console.log(user);
});
```

Esses serviços são essenciais para a funcionalidade do sistema de formulários dinâmicos, permitindo a interação entre a interface do usuário e o backend.


- [Configuração do Ambiente](/docs/ConfiguracaoDeAmbiente.md)
- [Rotas](/docs/Rotas.md)
- [Estrutura do Projeto](/docs/EstruturaDoProjeto.md)
- [Componentes](/docs/Componentes.md)

- [Páginas](/docs/Paginas.md)
