import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostsService {

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

  getPostById(id: string): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts?id=' + id);
  }

  addNewPost(post: Post) {
    // Valider le post avant de l'ajouter
  }
}
