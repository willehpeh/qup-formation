import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosCardComponent } from './components/todos-list/todos-card/todos-card.component';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    TodosListComponent,
    TodosCardComponent,
    SingleTodoComponent
  ]
})
export class TodosModule {}
