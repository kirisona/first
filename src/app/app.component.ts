import { Component, OnInit } from '@angular/core';
import { PostInterface } from './interfaces/post.interface';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  posts: PostInterface[];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(
      posts => {
        console.log(posts);
      }
    )
  }
}

