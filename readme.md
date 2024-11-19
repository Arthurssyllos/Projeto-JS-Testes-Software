# Aplicativo de Lista de Tarefas

Este é um aplicativo simples de lista de tarefas desenvolvido em **JavaScript**, com as funcionalidades essenciais para gerenciar suas tarefas diárias. O aplicativo permite:

- **Adicionar tarefas**
- **Editar tarefas**
- **Marcar tarefas como concluídas**
- **Remover tarefas**
- **Filtrar tarefas por status (pendente ou concluída)**
- **Filtrar tarefas por data**

## Funcionalidades

- **Adicionar tarefas**: O usuário pode adicionar tarefas com título e descrição.
- **Editar tarefas**: O título e a descrição de uma tarefa podem ser alterados a qualquer momento.
- **Marcar tarefas como concluídas**: O usuário pode marcar tarefas como concluídas.
- **Remover tarefas**: Tarefas podem ser removidas da lista a qualquer momento.
- **Filtrar tarefas**: O usuário pode filtrar as tarefas por **status** (pendente ou concluída) ou por **data** de criação.

## Testes

Para garantir a qualidade e o bom funcionamento do aplicativo, diversos testes foram implementados usando a biblioteca **Jest**. Os testes incluem:

- **Testes Unitários**: Verificam o funcionamento isolado de cada método da aplicação (adicionar, editar, remover, marcar como concluída, filtrar).
- **Testes de Integração**: Validam as interações entre os diferentes módulos do aplicativo.
- **Testes de Sistema**: Avaliam o funcionamento completo do aplicativo, incluindo o fluxo de adicionar, editar, concluir e remover tarefas.
- **Testes de Aceitação**: Testes realizados com usuários reais para validar a experiência e usabilidade do aplicativo.

## Rodando o Projeto

1. Clone o repositório:

   ```bash
   git clone <url-do-repositório>

2. Instale as dependências:

    ```bash
    npm install

3. Execute os testes:

    ```bash
    npm test

## Estrutura do Código:

- **Task.js**: Contém a definição da classe Task, que representa cada tarefa individual.
- **TaskList.js**: Gerencia a lista de tarefas, com métodos para adicionar, remover e filtrar tarefas.
- **task.test.js**: Contém todos os testes automatizados para garantir que a aplicação funcione corretamente.