import { Component } from '@angular/core';
import { TransportationService } from './transportation.service';
import { Todo } from './todo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;
  username: string;
  todos: Todo[];

  constructor(private transportationService: TransportationService) {
    this.todos = this.transportationService.getTodos();
  }

  addTodo() {
    if (!this.title) return;
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title: this.title,
      isCompleted: false,
    };
    this.transportationService.addTodo(newTodo);
    this.title = '';
  }

  toggleStatus(todo: Todo) {
    this.transportationService.toggleStatus(todo);
  }

  deleteTodo(todo: Todo) {
    this.transportationService.deleteTodo(todo);
  }
}
