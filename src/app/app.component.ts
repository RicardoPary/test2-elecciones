import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {

  votos = 0;
  
  allPersons = [
    { nombre: "juan", edad: 13, habilitado: true },
    { nombre: "marco", edad: 54, habilitado: false },
    { nombre: "julia", edad: 78, habilitado: true },
    { nombre: "maria", edad: 90, habilitado: false },
    { nombre: "marta", edad: 56, habilitado: true },
    { nombre: "jorge", edad: 33, habilitado: true },
    { nombre: "isela", edad: 10, habilitado: false },
    { nombre: "omar", edad: 34, habilitado: false },
    { nombre: "juana", edad: 5, habilitado: true },
    { nombre: "julio", edad: 75, habilitado: false }
  ];

  habilitados = this.allPersons.filter(p => p.habilitado);
  inabilitados = this.allPersons.filter(p => !p.habilitado);

  persons = {
    mayores: this.allPersons.filter(p => p.edad >= 65),
    menores: this.allPersons.filter(p => p.edad < 65)
  };

  verifyVotos() {
    const mayor = this.persons.mayores.filter(p => p.habilitado);
    const menor = this.persons.menores.filter(p => p.habilitado);
    return mayor.length + menor.length === 0;
  }

  votar(person, tipo) {
    this.votos++;
    const index = this.persons[tipo].findIndex(p => p === person);
    this.persons[tipo].splice(index, 1);
  }
}
