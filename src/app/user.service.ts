import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private static readonly POST_CUSTOMER_URL = '/api/post/user';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<object> {
    return this.http.post(UserService.POST_CUSTOMER_URL, user, { headers: this.headers });
  }
}
