
# Componentes

Este documento detalha os componentes reutilizáveis desenvolvidos para o sistema de formulários dinâmicos, fornecendo uma visão geral de sua funcionalidade, props esperadas e exemplos de uso.

## Button.tsx

**Descrição**: Componente de botão genérico utilizado para ações de usuário como enviar, cancelar, etc.

**Props**:
- `onClick`: Função chamada quando o botão é clicado.
- `type`: Tipo do botão (`"button"`, `"submit"`, `"reset"`).
- `className`: Classes CSS adicionais para estilização.

**Exemplo de Uso**:
```jsx
<Button onClick={handleSubmit} type="submit" className="btn-primary">
  Enviar
</Button>
```

## MiniMenu.tsx

**Descrição**: Componente de menu minimalista para ações rápidas, como editar ou deletar.

**Props**:
- `items`: Array de itens do menu, onde cada item tem um `label` e uma ação `onClick`.

**Exemplo de Uso**:
```jsx
<MiniMenu items={[{ label: "Editar", onClick: handleEdit }, { label: "Deletar", onClick: handleDelete }]} />
```

## NavBar.tsx

**Descrição**: Componente da barra de navegação principal do aplicativo.

**Props**:
- `isLoggedIn`: Indica se o usuário está logado para ajustar os itens de menu exibidos.

**Exemplo de Uso**:
```jsx
<NavBar isLoggedIn={true} />
```

## Options.tsx

**Descrição**: Componente para renderizar opções de múltipla escolha ou escolha única.

**Props**:
- `type`: Define o tipo de opção (`"checkbox"` ou `"radio"`).
- `options`: Array de opções disponíveis.
- `name`: Nome do grupo de opções.

**Exemplo de Uso**:
```jsx
<Options type="radio" options={questionOptions} name="question" />
```

## PulsingDot.tsx

**Descrição**: Componente visual para indicar carregamento ou atividade.

**Props**: N/A

**Exemplo de Uso**:
```jsx
<PulsingDot />
```

## TextArea.tsx

**Descrição**: Componente para entrada de texto multilinha, utilizado em respostas discursivas.

**Props**:
- `placeholder`: Texto de placeholder do campo de texto.
- `name`: Nome do campo, para referência em formulários.

**Exemplo de Uso**:
```jsx
<TextArea placeholder="Digite sua resposta..." name="response" />
```

Estes componentes formam a base da interface do usuário no sistema de formulários dinâmicos, promovendo a reutilização e a consistência visual.
