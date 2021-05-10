import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './components/dash/dash.component';
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
