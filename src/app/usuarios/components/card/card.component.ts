import { Component, Input } from '@angular/core';
import { Usuario } from '@shared/models/usuario.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() usuario: Usuario;

  constructor() { }

}
