import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from '../../../models/todos.model';

@Component({
  selector: 'app-todos-card',
  templateUrl: './todos-card.component.html',
  styleUrls: ['./todos-card.component.scss']
})
export class TodosCardComponent implements OnInit {

  @Input() todo!: TodoModel;

  constructor() { }

  ngOnInit(): void {
  }

}
