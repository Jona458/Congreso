import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagService {
  private usuarios = [
    {
      nombreUsuario: 'juan_perez@gmail.com',
      contraseña: 'contraseña123'
    },
    {
      nombreUsuario: 'ana_gomez@gmail.com',
      contraseña: 'clave_segura'
    },
    {
      nombreUsuario: 'carlos_rodriguez@gmail.com',
      contraseña: 'contraseñacarlos'
    },
    {
      nombreUsuario: 'laura_martinez@gmail.com',
      contraseña: 'contraseña123'
    },
  ];

  constructor() { }
  obtenerUsuarios() {
    return this.usuarios;
  }

  buscarUsuario(nombreUsuario: string, contraseña: string): boolean {
    const usuarioEncontrado = this.usuarios.find(user => user.nombreUsuario === nombreUsuario && user.contraseña === contraseña);
    return !!usuarioEncontrado;
  }
}
