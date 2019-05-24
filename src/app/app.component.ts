import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manage your todos';

  // Pass property to TodoListComponent
  public addTodo: Todo;
  addInTodoList(todo: Todo) {
    this.addTodo = todo;
  }

}
