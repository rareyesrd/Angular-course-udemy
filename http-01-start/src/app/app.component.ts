import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from './posts.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  private errorSub: Subscription;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(errorMessage => this.error = errorMessage);
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
  onErrorHandle() {
    this.error = null;
  }
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
