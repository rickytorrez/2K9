import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/components/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private _http: HttpClient
  ) { }

  // gets all the todos according to user name and expects to be returned an array of todos
  retrieveAllTodos(username){
    return this._http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }
}
