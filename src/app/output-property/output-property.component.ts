import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;
  @Output() modouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementa() {
    this.valor++;
    this.modouValor.emit({novo: this.valor});
  }

  decrementa() {
    this.valor--;
    this.modouValor.emit({novo: this.valor});
  }

}
