import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly USER = 'USER_ID';

  loggedUser: string;

  constructor(private http: HttpClient, private route: Router) {}

  login(email: string, password: string) {
    return this.http
      .post<any>('http://localhost:3080/api/login', { email, password })
      .pipe(
        tap((tokens) => {
          localStorage.setItem(this.USER, tokens.user._id);
          this.doLoginUser(email, tokens);
        }),
        mapTo(true),
        catchError((error) => {
          alert(error);
          return of(false);
        })
      );
  }

  doLoginUser(email, tokens) {
    this.loggedUser = email;
    this.storeToken(tokens);
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    this.loggedUser = null;
    this.route.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  storeToken(token) {
    localStorage.setItem(this.JWT_TOKEN, token.token);
  }
}
