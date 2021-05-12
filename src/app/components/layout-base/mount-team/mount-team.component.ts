import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PlayersService } from 'src/app/services/players.service';
import { TeamService } from 'src/app/services/team.service';
import { NextGameComponent } from '../next-game/next-game.component';

@Component({
  selector: 'app-mount-team',
  templateUrl: './mount-team.component.html',
  styleUrls: ['./mount-team.component.css'],
})
export class MountTeamComponent implements OnInit {
  players = [];
  formTeam;
  zg = [];
  mc = [];
  at = [];
  constructor(
    private playerService: PlayersService,
    private teamService: TeamService,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formTeam = this.fb.group({
      id_user: [localStorage.getItem('USER_ID'), Validators.required],
      zg_1: ['', Validators.required],
      zg_2: ['', Validators.required],
      mc_1: ['', Validators.required],
      mc_2: ['', Validators.required],
      at_1: ['', Validators.required],
    });

    this.playerService.getPlayers().subscribe((res) => {
      this.zg = res.data.filter((it) => it.position === 'ZG');
      this.mc = res.data.filter((it) => it.position === 'MC');
      this.at = res.data.filter((it) => it.position === 'AT');
    });
  }

  onSubmit() {
    this.teamService
      .updateTeam(this.formTeam.value)
      .subscribe((res) => console.log(res));
  }

  openDialog() {
    const dialogRef = this.dialog.open(NextGameComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
