import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { IllerComponent } from './nav/iller/iller.component';
import { MinNemComponent } from './nav/min-nem/min-nem.component';
import { GunlerComponent } from './nav/gunler/gunler.component';
import { ExcelComponent } from './nav/excel/excel.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    IllerComponent,
    MinNemComponent,
    GunlerComponent,
    ExcelComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }