import { Component } from '@angular/core';
import { LoginService } from './login.service'; 
@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private loginService: LoginService) {} 
  onSubmit() {
    const isAuthenticated = this.loginService.login(this.username, this.password);

    if (!isAuthenticated) {
      // Credenciales incorrectas, muestra un mensaje de error
      this.error = 'Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.';
    }
  }
}
