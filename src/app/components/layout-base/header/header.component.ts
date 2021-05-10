import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('USER_ID');
    this.userService.getUserForId(this.user).subscribe(
      (res) => alert(res.data.name),
      (err) => {
        this.router.navigate(['login']);
      }
    );
  }
}
