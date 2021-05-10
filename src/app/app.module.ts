import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderModule } from './components/layout-base/header/header.module';
import { LastPontuationComponent } from './components/layout-base/last-pontuation/last-pontuation.component';
import { MyTeamComponent } from './components/layout-base/my-team/my-team.component';
import { NextGameComponent } from './components/layout-base/next-game/next-game.component';
import { RankingComponent } from './components/layout-base/ranking/ranking.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LastPontuationComponent,
    NextGameComponent,
    RankingComponent,
    MyTeamComponent,
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
