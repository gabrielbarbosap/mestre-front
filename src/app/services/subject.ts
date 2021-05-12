import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  // Observable string sources

  private getUserLoged = new Subject<string>();

  // Observable string streams

  getUserLoged$ = this.getUserLoged.asObservable();

  getuser(data: any): void {
    console.log(data);
    this.getUserLoged.next(data);
  }
}
