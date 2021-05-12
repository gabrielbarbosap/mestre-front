import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-ranking-match',
  templateUrl: './ranking-match.component.html',
  styleUrls: ['./ranking-match.component.css'],
})
export class RankingMatchComponent implements OnInit {
  usersForRanking;
  constructor(private rankingService: TeamService) {}

  ngOnInit(): void {
    this.rankingService
      .getRankingMatch()
      .subscribe((res) => (this.usersForRanking = res.data));
  }
}
