import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    constructor(private http: HttpClient) {}

    getPosts(): Observable<PostsService[]> {
        return this.http.get<PostsService[]>('https://my-json-server.typicode.com/typicode/demo/posts');
    }
}