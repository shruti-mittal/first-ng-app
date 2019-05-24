import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  public message: string = '';

  public todo: Todo;   //it is like declaring: public todo = new Todo();
  @Output() public todoSubmitted = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.initialTodoForm();
  }

  submitTask() {
    if (!this.todo.taskType || !this.todo.taskName || !this.todo.taskCompletedBy) {
      this.message = 'All fields are required.';
      return;
    }

    this.todoSubmitted.emit(this.todo);
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
