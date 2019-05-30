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
    if (changes.todoAdded.currentValue) {
      this.taskList.push(changes.todoAdded.currentValue);
      this.saveInLocalStorage();
    }
  }

  // OnInit() method hook runs only once when this angular component gets initialized
  ngOnInit() {
    // LocalStorage: Keeps data locally in browser's local storage. Data with no expiration date that will persist after the browser window is closed (until the user manually clears the browser cache or until your web app clears the data).
    // SessionStorage: Keeps data locally in browser's session storage. Data gets cleared after the browser window is closed (from all tabs opened for this domain).
    // These are synchronous HTML5 web Storage API {For async process, use IndexedDB web storage API}. These data cannot be read by server. Hence safe (unlike cookies). Every domain has its data storage given.
    // These APIs have their events also to put some more features & error emitting support to detect if max storage size(10MB mostly) is reached for this domain.

    this.getFromLocalStorage();
  }

  deleteTodo(index) {
    this.taskList.splice(index, 1);
    this.saveInLocalStorage();
  }

  toggleTodo(todo) {
    todo.completed = !todo.completed;
    this.saveInLocalStorage();
  }

  getFromLocalStorage() {
    this.taskList = JSON.parse(localStorage.getItem('taskList')) || [];   //similarly for Session Storage : sessionStorage.getItem('taskList')
  }

  saveInLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));   //similarly for Session Storage : sessionStorage.setItem('taskList', stringValue)
  }

}
