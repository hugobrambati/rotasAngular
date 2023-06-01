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
    {id: 0, nome: "Manuel", idade:83}
  ]

  usuarios: Usuario[] = [
    {id: 1, nome: "Hugo", idade:42},
    {id: 2, nome: "Ana Paula", idade: 44},
    {id: 2, nome: "Manu", idade:7}
  ]

  removerPessoa(usuario:Usuario){
    console.log ("Usuario removido...")
    this.usuarioService.remover(this.usuario,usuario)
  }

  



}
