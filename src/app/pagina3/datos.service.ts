import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  accion = [
    {
      usuario: 'erick@gmail.com',
      contrasena: '12345678'
    },
    {
      usuario: 'monis@gmail.com',
      contrasena: 'monis'
    },
    {
      usuario: 'salinas@gmail.com',
      contrasena: 'salinas'
    },
    {
      usuario: 'gris@gmail.com',
      contrasena: 'tese23Afj3'
    },
  ];

  constructor(private router: Router) { }

  gedAccion() {
    return this.accion;
  }

  buscarUsuario(usuario: string, contrasena: string): boolean {
    const usuarioEncontrado = this.accion.find(u => u.usuario === usuario);
  
    if (usuarioEncontrado) {
      if (usuarioEncontrado.contrasena === contrasena) {
        localStorage.setItem('16', '16');
        this.router.navigate(['/talleristas']);
  
        return true;
      } else {
        console.error('Contraseña Incorrecta');
        return false;
      }
    } else {
      console.error('Usuario no encontrado');
      return false;
    }
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('16') !== null;
  }
  
}  
