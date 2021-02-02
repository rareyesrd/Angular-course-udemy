import { Component, OnInit } from '@angular/core';
import { Post } from './posts.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.error.subscribe(errorMessage => this.error = errorMessage);
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postService.onCreateandStorePost(postData);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postService.deletePost().subscribe(() => this.loadedPosts = []);
  }

  private fetchPosts() {
    this.postService.onFecthPost()
      .subscribe(data => {
        this.loadedPosts = data;
      }, error => {
        this.error = `${error.error.error} status ${error.status}`;
      });
  }
}
