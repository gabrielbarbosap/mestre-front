import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<any> {
    return this.http.get<any>(this.url + `/player`);
  }
}
