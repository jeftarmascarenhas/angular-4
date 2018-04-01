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

  valorAtual: string = '';
  valorSalvo;

  isMouseOver: boolean = false;

  nome: string = 'ABC';

  pessoa: any = {
    nome: 'def',
    idade: 31
  };
    
  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 1;
  }

  getCursoAngular() {
    return false;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(event: KeyboardEvent) {
    console.log((<HTMLInputElement>event.target).value);
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(value) {
    this.valorSalvo = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
