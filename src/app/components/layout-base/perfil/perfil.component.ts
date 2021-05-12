import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubjectService } from 'src/app/services/subject';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  sub: Subscription;
  userAllData;
  private USER;

  constructor(
    private userService: UserService,
    private router: Router,
    private subjectService: SubjectService
  ) {}
  ngOnInit(): void {
    this.USER = localStorage.getItem('USER_ID');
    this.userService.getUserForId(this.USER).subscribe(
      (res) => {
        this.userAllData = res.data;
      },
      (err) => {
        this.router.navigate(['login']);
      }
    );
  }
}
