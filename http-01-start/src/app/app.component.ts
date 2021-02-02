import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/Operators";
import { Post } from "./posts.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http
      .post<{ name: string }>(
        "https://ng-complete-guide-5dc83-default-rtdb.firebaseio.com/posts.json",
        postData
      )
      .subscribe((responseData) => console.log(responseData));
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http
      .get<Post>(
        "https://ng-complete-guide-5dc83-default-rtdb.firebaseio.com/posts.json"
      )
      .pipe(
        map((reponseData) => {
          const postsArray: Post[] = [];
          for (const key in reponseData) {
            if (reponseData.hasOwnProperty(key)) {
              postsArray.push({ ...reponseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe((data) => this.loadedPosts = data);
  }
}
