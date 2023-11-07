import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagService } from './pag.service';  // Ajusta la ruta

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.page.html',
  styleUrls: ['./pagina4.page.scss'],
})
export class Pagina4Page implements OnInit {
  formularioInicioSesion: FormGroup;
  usuarios: any = {};

  constructor(private formBuilder: FormBuilder, private servicioAutenticacion: PagService) {
    this.formularioInicioSesion = this.formBuilder.group({
      nombreUsuario: ['', Validators.required],
      contraseña: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.usuarios = this.servicioAutenticacion.obtenerUsuarios();
  }

  iniciarSesion() {
    const nombreUsuario = this.formularioInicioSesion.value.nombreUsuario;
    const contraseña = this.formularioInicioSesion.value.contraseña;
    const esUsuarioValido = this.servicioAutenticacion.buscarUsuario(nombreUsuario, contraseña);

    if (esUsuarioValido) {
      console.log('Inicio de sesión exitoso');
    } else {
      console.error('Credenciales inválidas');
    }
  }
}
