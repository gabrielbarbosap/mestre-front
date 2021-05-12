import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyTeamComponent } from './my-team.component';

@NgModule({
  declarations: [MyTeamComponent],
  imports: [CommonModule, SharedModule],
  exports: [MyTeamComponent],
  entryComponents: [],
})
export class MyTeamModule {}
