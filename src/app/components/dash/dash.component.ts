import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnInit {
  private USER;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.USER = localStorage.getItem('USER_ID');
    this.userService.getUserForId(this.USER).subscribe(
      (res) => console.log(res),
      (err) => {
        this.router.navigate(['login']);
      }
    );
  }
}
