import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todos.service';
import { Observable } from 'rxjs';
import { TodoModel } from '../../models/todos.model';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent implements OnInit {

  todo$!: Observable<TodoModel>;

  constructor(private todoService: TodoService,
              private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.todo$ = this.route.params.pipe(
      map(params => params.id),
      switchMap(id => this.todoService.getTodoById(id))
    );
  }

}
