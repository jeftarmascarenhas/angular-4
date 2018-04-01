import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  name: string = 'Jeftar';
  cursoAngular: boolean = true;
  urlImage: string = 'http://lorempixel.com/g/400/200/';
    
  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 1;
  }

  getCursoAngular() {
    return false;
  }

}
