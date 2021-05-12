import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './components/dash/dash.component';
import { MountTeamComponent } from './components/layout-base/mount-team/mount-team.component';
import { PerfilComponent } from './components/layout-base/perfil/perfil.component';
import { RankingMatchComponent } from './components/layout-base/ranking-match/ranking-match.component';
import { RankingComponent } from './components/layout-base/ranking/ranking.component';
import { DashGuard } from './helpers/dash.guard';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../app/components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'dash',
    component: DashComponent,
    loadChildren: () =>
      import('../app/components/dash/dash.module').then((m) => m.DashModule),
    canActivate: [DashGuard],
  },
  {
    path: 'team',
    component: MountTeamComponent,
    loadChildren: () =>
      import('../app/components/layout-base/mount-team/mount-team.module').then(
        (m) => m.MountTeamModule
      ),
    canActivate: [DashGuard],
  },
  {
    path: 'profile',
    component: PerfilComponent,
    canActivate: [DashGuard],
  },
  {
    path: 'ranking',
    component: RankingComponent,
    canActivate: [DashGuard],
  },
  {
    path: 'ranking/match',
    component: RankingMatchComponent,
    canActivate: [DashGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
