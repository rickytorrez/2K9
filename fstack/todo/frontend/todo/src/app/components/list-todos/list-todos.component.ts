import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/data/todo-data.service';
import { TouchSequence } from 'selenium-webdriver';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){
    
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo []

  constructor(
    private _tDS: TodoDataService
  ) { }

  ngOnInit() {
    this._tDS.retrieveAllTodos('ricky').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

}
