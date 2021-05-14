import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoModel } from '../models/todos.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) {

  }

  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>('http://localhost:3000/todos');
  }

  getTodoById(id: string): Observable<TodoModel> {
    return this.http.get<TodoModel[]>('http://localhost:3000/todos?id=' + id).pipe(
      map(todosArray => todosArray[0])
    );
  }
}
