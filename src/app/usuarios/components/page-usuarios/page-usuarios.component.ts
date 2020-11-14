import { Component, OnInit } from '@angular/core';
import { Usuario } from '@shared/models/usuario.model';


@Component({
  selector: 'app-page-usuarios',
  templateUrl: './page-usuarios.component.html',
  styleUrls: ['./page-usuarios.component.scss']
})
export class PageUsuariosComponent implements OnInit {

  public usuarios: Usuario[];

  constructor() { }

  ngOnInit(): void { }

}
