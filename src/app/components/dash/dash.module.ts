import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderModule } from '../layout-base/header/header.module';
import { LastPontuationModule } from '../layout-base/last-pontuation/last-pontuation.module';
import { MountTeamModule } from '../layout-base/mount-team/mount-team.module';
import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';

@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    HeaderModule,
    MountTeamModule,
    LastPontuationModule,
    SharedModule,
  ],
  exports: [DashComponent],
  entryComponents: [],
})
export class DashModule {}
