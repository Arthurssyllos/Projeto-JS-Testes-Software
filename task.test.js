// task.test.js

const { Task } = require('./Task'); // Importando a classe Task
const TaskList = require('./TaskList'); // Importando a classe TaskList

describe('Task Class', () => {
  let task;
  
  beforeEach(() => {
    task = new Task('My Task', 'This is a task description');
  });

  test('should create a task with title, description and status "pending"', () => {
    expect(task.title).toBe('My Task');
    expect(task.description).toBe('This is a task description');
    expect(task.status).toBe('pending');
  });

  test('should mark task as completed', () => {
    task.markAsCompleted();
    expect(task.status).toBe('completed');
  });

  test('should edit task details', () => {
    task.edit('Updated Task', 'Updated description');
    expect(task.title).toBe('Updated Task');
    expect(task.description).toBe('Updated description');
  });

  test('should remove a task by setting status to "removed"', () => {
    task.remove();
    expect(task.status).toBe('removed');
  });
});

describe('TaskList Class', () => {
  let taskList;
  
  beforeEach(() => {
    taskList = new TaskList();
    taskList.addTask('Task 1', 'Description 1');
    taskList.addTask('Task 2', 'Description 2');
    taskList.addTask('Task 3', 'Description 3');
  });

  test('should add a task to the list', () => {
    expect(taskList.tasks.length).toBe(3);
  });

  test('should remove a task from the list', () => {
    const taskToRemove = taskList.tasks[0];
    taskList.removeTask(taskToRemove);
    expect(taskList.tasks.length).toBe(2);
  });

  test('should filter tasks by status', () => {
    const taskToComplete = taskList.tasks[0];
    taskToComplete.markAsCompleted();
    const completedTasks = taskList.filterByStatus('completed');
    expect(completedTasks.length).toBe(1);
    expect(completedTasks[0].status).toBe('completed');
  });

  test('should filter tasks by date', () => {
    const today = new Date().toDateString();
    const taskFromToday = taskList.tasks[0];
    const tasksFromToday = taskList.filterByDate(today);
    expect(tasksFromToday.length).toBe(1);
    expect(tasksFromToday[0].creationDate.toDateString()).toBe(today);
  });
});

describe('System Tests', () => {
  let taskList;

  beforeEach(() => {
    taskList = new TaskList();
  });

  test('should execute the full flow of adding, editing, completing, and removing tasks', () => {
    // Adicionando tarefas
    taskList.addTask('Task 1', 'Task description');
    expect(taskList.tasks.length).toBe(1);

    const task = taskList.tasks[0];

    // Editando a tarefa
    task.edit('Updated Task 1', 'Updated description');
    expect(task.title).toBe('Updated Task 1');
    expect(task.description).toBe('Updated description');

    // Marcando como concluída
    task.markAsCompleted();
    expect(task.status).toBe('completed');

    // Removendo a tarefa
    taskList.removeTask(task);
    expect(taskList.tasks.length).toBe(0);
  });
});
