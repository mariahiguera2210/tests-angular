import { Component } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  template: '<p class="mensaje">Valor por defecto</p>',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent {
  mensaje: string = 'Valor por defecto';

}
