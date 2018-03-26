import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { Hero } from '../Hero';

@Component({
  selector: 'app-register-hero',
  templateUrl: './register-hero.component.html',
  styleUrls: ['./register-hero.component.css']
})
export class RegisterHeroComponent implements OnInit {
  heroes: string[] = ['Superman', 'Batman'];

  constructor() { }

  ngOnInit() {
  }

  form_register(formHero: NgForm) {
    this.heroes.push(formHero.controls.name.value);
    console.log(this.heroes);
  }

}
  