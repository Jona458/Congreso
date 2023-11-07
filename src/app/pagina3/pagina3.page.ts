import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from './datos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  registra:FormGroup;
  accion:any={}
  error=[{
    type:'required',message:'dato requerido'
  },
  {
    type:'minlength',message:'min 8 caracteres'
  },
  {
    type:'pattern',message:'no cumple patron'
  },
  {
    type:'email',message:'correo incorrecto'
  },
]
  constructor(private form:FormBuilder, private datos:DatosService, private router: Router) { 
    this.registra=this.form.group({
      Correo:['',[Validators.required,Validators.email]],
      Contrasena:['',[Validators.required,Validators.minLength(8),Validators.pattern("([A-Z]*[a-z]*[0-9]*)+")]],
    }) 
  }
  ngOnInit() {
    this.accion=this.datos.gedAccion()
  }
  guardar() {
    const usuario = this.registra.value.Correo;
    const contrasena = this.registra.value.Contrasena;
    const accesoPermitido = this.datos.buscarUsuario(usuario, contrasena);
    if (accesoPermitido) {
      console.log('Usuario Válido');
      this.router.navigate(['/talleristas']); 
    } else {
      console.error('Usuario Incorrecto');
    }
  }
   
}
