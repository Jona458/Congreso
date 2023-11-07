import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogService } from './log.service';
import { Router } from '@angular/router'; // Importa el módulo Router



@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.page.html',
  styleUrls: ['./pagina5.page.scss'],
})
export class Pagina5Page implements OnInit {
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  registra:FormGroup;
  accion:any={}
  error=[{
    type:'required',message:'*Datos incorrectos'
  },
  {
    type:'minlength',message:'*No cumple con los caracteres'
  },
  {
    type:'pattern',message:'*Patron incorrecto'
  },
  {
    type:'email',message:'*Correo institucional invalido'
  },
]
  constructor(private form:FormBuilder, private datos:LogService, private router: Router) { 
    this.registra=this.form.group({
      Correo:['',[Validators.required,Validators.email,Validators.minLength(9),Validators.pattern("([A-Z]*[a-z]*[0-9])+(@tese.edu.mx)+")]],
      Contrasena:['',[Validators.required,Validators.minLength(8),Validators.pattern("([A-Z]*[a-z]*[0-9]*[#]*[$]*[%]*[&]*[/]*[.]*)+")]],
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

   
