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
import { DataBindingComponent } from './data-binding/data-binding.component';

import { CursosModule } from './cursos/cursos.module';
import { MeuFormModule } from './meu-form/meu-form.module';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { TesteSassComponent } from './teste-sass/teste-sass.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MyPrimaryComponent,
    MessagesComponent,
    DashboardComponent,
    RegisterHeroComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    TesteSassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CursosModule,
    MeuFormModule
  ],
  providers: [
    HeroService,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
