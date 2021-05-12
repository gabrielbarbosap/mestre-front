import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { PerfilComponent } from './perfil.component';

@NgModule({
  declarations: [PerfilComponent],
  imports: [CommonModule, SharedModule, HeaderModule],
  exports: [PerfilComponent],
  entryComponents: [],
})
export class ProfileModule {}
