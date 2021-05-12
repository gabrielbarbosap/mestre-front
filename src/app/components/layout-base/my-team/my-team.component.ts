import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from 'src/app/services/subject';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css'],
})
export class MyTeamComponent implements OnInit {
  sub: Subscription;
  userAllData;
  constructor(private subjectService: SubjectService) {
    this.getUser();
  }
  ngOnInit(): void {
    console.log('chegou');
  }

  getUser() {
    this.sub = this.subjectService.getUserLoged$.subscribe(
      (res: any) => (this.userAllData = res.data)
    );
  }
}
