import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from 'src/app/services/subject';

@Component({
  selector: 'app-last-pontuation',
  templateUrl: './last-pontuation.component.html',
  styleUrls: ['./last-pontuation.component.css'],
})
export class LastPontuationComponent implements OnInit {
  sub: Subscription;
  userAllData;
  constructor(private subjectService: SubjectService) {
    this.sub = subjectService.getUserLoged$.subscribe(
      (res: any) => (this.userAllData = res.data)
    );
  }

  ngOnInit(): void {}
}
