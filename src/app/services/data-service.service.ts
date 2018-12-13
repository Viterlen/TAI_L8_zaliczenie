import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataServiceService {

    private url = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Array<Post>> {
        return this.http.get(this.url + '/api/posts').pipe(
            map((x: any[]) => x.slice(0, 10))
        );
    }

    getPost(id: string): Observable<Post> {
        return this.http.get(this.url + '/api/post/' + id);
    }

}

class Post {
    title?: string;
    url?: string;
    content?: string;
}