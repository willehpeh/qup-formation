import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todos.service';
import { Observable } from 'rxjs';
import { Post } from '../../../blog/models/post.model';
import { TodoModel } from '../../models/todos.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  todos$!: Observable<TodoModel[]>;

  constructor(private todos: TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.todos.getTodos();
  }

}
