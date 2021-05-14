import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post$!: Observable<Post>;

  constructor(private postsService: PostsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.post$ = this.route.params.pipe(
      map(params => params.id),
      switchMap(id => this.postsService.getPostById(id)),
      map(posts => posts[0]),
    );
  }

}
