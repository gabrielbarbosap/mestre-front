import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './components/layout-base/footer/footer.component';
import { HeaderModule } from './components/layout-base/header/header.module';
import { NextGameComponent } from './components/layout-base/next-game/next-game.component';
import { PerfilComponent } from './components/layout-base/perfil/perfil.component';
import { RankingComponent } from './components/layout-base/ranking/ranking.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { MaterialModule } from './shared/material.module';
import { RankingMatchComponent } from './components/layout-base/ranking-match/ranking-match.component';

@NgModule({
  declarations: [
    AppComponent,
    NextGameComponent,
    RankingComponent,
    FooterComponent,
    PerfilComponent,
    RankingMatchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
