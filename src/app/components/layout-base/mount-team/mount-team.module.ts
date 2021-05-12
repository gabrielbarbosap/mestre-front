import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { MyTeamModule } from '../my-team/my-team.module';
import { MountTeamComponent } from './mount-team.component';

@NgModule({
  declarations: [MountTeamComponent],
  imports: [CommonModule, SharedModule, HeaderModule, MyTeamModule],
  exports: [MountTeamComponent],
  entryComponents: [],
})
export class MountTeamModule {}
