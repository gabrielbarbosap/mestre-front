import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MountTeamComponent } from './mount-team.component';

@NgModule({
  declarations: [MountTeamComponent],
  imports: [CommonModule, SharedModule],
  exports: [MountTeamComponent],
  entryComponents: [],
})
export class MountTeamModule {}
