import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './blog/components/post-list/post-list.component';
import { SinglePostComponent } from './blog/components/single-post/single-post.component';
import { TodosListComponent } from './todos/components/todos-list/todos-list.component';
import { SingleTodoComponent } from './todos/components/single-todo/single-todo.component';

const routes: Routes = [
  { path: 'list', component: PostListComponent },
  { path: 'detail/:id', component: SinglePostComponent },
  { path: 'todos-list', component: TodosListComponent },
  {path: 'todo-single/:id', component: SingleTodoComponent},
  { path: '', pathMatch: 'full', redirectTo: 'todos-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
