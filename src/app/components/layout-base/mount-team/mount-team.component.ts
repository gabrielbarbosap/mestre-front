import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-mount-team',
  templateUrl: './mount-team.component.html',
  styleUrls: ['./mount-team.component.css'],
})
export class MountTeamComponent implements OnInit {
  players = [];

  constructor(private playerService: PlayersService) {}

  ngOnInit(): void {
    this.playerService
      .getPlayers()
      .subscribe((res) => (this.players = res.data));
  }
}
