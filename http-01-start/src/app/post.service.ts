import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/Operators';
import { Post } from './posts.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) { }
  error = new Subject<string>();
  onCreateandStorePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-5dc83-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => responseData, error => this.error = error.message);
  }

  onFecthPost() {
    return this.http
      .get<Post>(
        'https://ng-complete-guide-5dc83-default-rtdb.firebaseio.com/posts.json'
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
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  deletePost() {
    return this.http.delete('https://ng-complete-guide-5dc83-default-rtdb.firebaseio.com/posts.json');
  }
}
