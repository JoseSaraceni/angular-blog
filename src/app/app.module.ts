import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { TitleComponent } from './componentes/title/title.component';
import { BigCardComponent } from './componentes/big-card/big-card.component';
import { LittleCardComponent } from './componentes/little-card/little-card.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TitleComponent,
    BigCardComponent,
    LittleCardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
