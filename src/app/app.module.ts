import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import  { MyPrimaryComponent } from './my-primery/my-primery.component';

import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterHeroComponent } from './register-hero/register-hero.component';

import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MyPrimaryComponent,
    MessagesComponent,
    DashboardComponent,
    RegisterHeroComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [
    HeroService,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
