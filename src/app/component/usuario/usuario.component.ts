import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
public dados = [
  {id:1, nome:"Heitor", idade: 25, sexo:"M", telefone:99999999},
  {id:2, nome:"Hugo", idade: 42, sexo:"M", telefone:888888888},
  {id:3, nome:"Henrique", idade: 35, sexo:"M", telefone:77777777}
]
}
