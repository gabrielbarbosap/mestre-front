import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TeamService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  updateTeam(team): Observable<any> {
    return this.http.put<any>(this.url + `/team`, team);
  }

  getRankingAll(): Observable<any> {
    return this.http.get<any>(this.url + `/team`);
  }

  getRankingMatch(): Observable<any> {
    return this.http.get<any>(this.url + `/team/match`);
  }
}
