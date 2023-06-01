import { Injectable } from '@angular/core';
import { Usuario } from '../Usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  remover(usuarios: Usuario[], usuario: Usuario){
    return usuarios.filter((item)=> usuario.nome !== item.nome)
  }
}
