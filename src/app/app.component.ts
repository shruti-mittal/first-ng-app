import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manage your todos';
  public message: string = '';

  public todo;   //it will be like declaring: public todo = new Todo();
  public taskList: Todo[] = [];

  ngOnInit() {
    this.initialTodoForm();
  }

  submitTask() {
    if (!this.todo.taskType || !this.todo.taskName || !this.todo.taskCompletedBy) {
      this.message = 'All fields are required.';
      return;
    }

    this.taskList.push(this.todo);
    this.initialTodoForm();
  }

  initialTodoForm() {
    this.todo = {
      taskType: '',
      taskName: '',
      taskCompletedBy: null,
      completed: false
    };
    this.message = '';
  }

}
