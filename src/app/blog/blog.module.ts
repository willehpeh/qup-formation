import { NgModule } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCardComponent } from './components/post-list/post-card/post-card.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [],
  declarations: [
    PostListComponent,
    PostCardComponent,
    SinglePostComponent
  ],
  providers: []
})
export class BlogModule {}
