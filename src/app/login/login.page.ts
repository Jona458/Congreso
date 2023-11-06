import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogService } from './log.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public alertButtons = ['OK'];
  registra: FormGroup;
  bandera= true;
  regis: any=[];
  errores=[{
    type: 'required', message: 'Necesita ser correo institucional (@tese.edu.mx)'
  },
  {
    type: 'minlegth', message: 'Mínimo 8 caracteres'
  },
  {
    type: 'pather', message: 'No cumple con el patron'
  },
  {
    type: 'email', message: 'Estructura correcta'
  },

]
  

  constructor(private form:FormBuilder, private regi: LogService, 
    private alert: AlertController,
    ) {
    this.registra=this.form.group({
      Correo:['',Validators.email],
      Password:['',Validators.minLength(8)]
    })
   }

  ngOnInit() {
    this.regis = this.regi.getRegis()
  }
  ingresar(){
    const Correo = this.registra.value.Correo;
    const Password = this.registra.value.Password;
    const acceso=this.regi.findUS(Correo, Password);
    if(acceso){
      localStorage.setItem('ingresado','true')

    }else{

    }
  };
  
  aparecerDesaparecer(){
    if(this.bandera){
      this.bandera=false;

    }else{
      this.bandera=true;

    }
    
  };
}
