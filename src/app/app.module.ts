import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GestorComponent } from './components/gestor/gestor.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GestorCardComponent } from './components/gestor-card/gestor-card.component';
import { PresentismoComponent } from './components/presentismo/presentismo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GestorComponent,
    NavBarComponent,
    GestorCardComponent,
    PresentismoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
