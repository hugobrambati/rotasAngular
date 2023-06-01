import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService:UsuarioService){}

  ngOnInit(): void {}

  usuario: Usuario[] = [
    {id: 1, nome: "Hugo", idade:26},
    {id: 2, nome: "Manu", idade:7}
  ]

  



}
