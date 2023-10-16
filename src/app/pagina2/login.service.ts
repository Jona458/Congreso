import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private usuarios: { username: string; password: string }[] = [
    { username: 'GUSTAVO', password: '123' },
    { username: 'GABRIEL', password: '456' },
    { username: 'JONATHAN', password: '789' },
    { username: 'MIGUEL', password: '000' },
  ];

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Verificar si las credenciales coinciden con algún usuario
    const usuario = this.usuarios.find(
      (user) => user.username === username && user.password === password
    );

    if (usuario) {
      // Credenciales válidas, redirige al usuario a la página de inicio o a la página deseada
      this.router.navigate(['/program']);
      return true;
    } else {
      return false;
    }
  }
}
