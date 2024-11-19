// TaskList.js

class TaskList {
    constructor() {
      this.tasks = [];
    }
  
    // Método para adicionar uma nova tarefa
    addTask(title, description) {
      const task = new Task(title, description);
      this.tasks.push(task);
    }
  
    // Método para remover uma tarefa da lista
    removeTask(task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    }
  
    // Método para filtrar tarefas por status (pendente ou concluída)
    filterByStatus(status) {
      return this.tasks.filter(task => task.status === status);
    }
  
    // Método para filtrar tarefas por data de criação
    filterByDate(date) {
      return this.tasks.filter(task => task.creationDate.toDateString() === date.toDateString());
    }
  }
  
  module.exports = TaskList;
  