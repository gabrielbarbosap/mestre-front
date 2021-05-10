import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserForId(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3080/api/user/${id}`);
  }
}
