import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "persona",
  template: `
  <div [style.background]="!habilitado ? 'red' : 'orange'"
       style="float: left; margin: 10px; padding: 10px;">

	  <p>Nombre: {{nombre | uppercase}}</p>
	  <p>Edad: {{edad}}</p>
	  <p>Habilitado: {{habilitado ? 'si' : 'no'}}</p>

	  <button (click)="onVotar()" [disabled]="!habilitado">
      Votar
    </button>
  </div>
  `
})
export class PersonaComponent {
  @Input() nombre: string;
  @Input() edad: number;
  @Input() habilitado: boolean;
  @Output() votar = new EventEmitter();

  constructor() {}

  onVotar() {
    this.votar.emit();
  }

}
