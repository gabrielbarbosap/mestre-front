import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LastPontuationComponent } from './last-pontuation.component';

@NgModule({
  declarations: [LastPontuationComponent],
  imports: [CommonModule, SharedModule],
  exports: [LastPontuationComponent],
  entryComponents: [],
})
export class LastPontuationModule {}
