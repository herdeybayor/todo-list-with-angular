import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TransportationService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Welcome to Todo List App',
      isCompleted: true,
    },
  ];

  constructor() {}

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  toggleStatus(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  deleteTodo(todo: Todo) {
    const index: number = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
