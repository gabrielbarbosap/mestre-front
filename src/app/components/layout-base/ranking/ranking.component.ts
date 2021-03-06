import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  usersForRanking;
  constructor(private rankingService: TeamService) {}

  ngOnInit(): void {
    this.rankingService
      .getRankingAll()
      .subscribe((res) => (this.usersForRanking = res.data));
  }
}
