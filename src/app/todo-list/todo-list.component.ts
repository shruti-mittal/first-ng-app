import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnChanges {

  public taskList: Todo[] = [];
  @Input() todoAdded: Todo;

  constructor() {
  }

  // OnChanges() method hook gets triggered whenever ng detects changes to input properties of the component (or directive).
  ngOnChanges(changes: SimpleChanges) {
    if (changes.todoAdded.currentValue)
      this.taskList.push(changes.todoAdded.currentValue);
  }

  ngOnInit() {
  }

  deleteTodo(index) {
    this.taskList.splice(index, 1);
  }

  toggleTodo(todo) {
    todo.completed = !todo.completed;
  }

}
