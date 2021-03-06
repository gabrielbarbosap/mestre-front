import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  getUserForId(id: string): Observable<any> {
    return this.http.get<any>(this.url + `/user/${id}`);
  }
}
