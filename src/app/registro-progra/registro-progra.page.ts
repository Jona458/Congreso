import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-progra',
  templateUrl: './registro-progra.page.html',
  styleUrls: ['./registro-progra.page.scss'],
})
export class RegistroPrograPage implements OnInit {

  registra: FormGroup;
  bandera=false;
  bandera2 =false;

  constructor(private form:FormBuilder) { 
    this.registra=this.form.group({
      Equipo:['Boot'],
      Capitan:['Monica'],
      Matricula:['201921887',Validators.required],
      Password:['monis'],
      Email:['cervanteshernandez221@gmail.com'],
      Telefono:['5565543656'],
      Escuela:['Tecnologico Estudios Superiores de Ecatepec'],
      Carrera:['Sistemas computacionales'],

      SubCapitan:['Erick'],
      Matricula2:['201921234',Validators.required],
      Password2:['ericks'],
      Email2:['erickolguin123@gmail.com'],
      Telefono2:['5523764323'],

      Integrante3:['Miguel Angel'],
      Matricula3:['201921302',Validators.required],
      Password3:['salins'],
      Email3:['angelmsalinas@gmail.com'],
      Telefono3:['5598537268'],

    })
  }

  ngOnInit() {
  }
  guardar(){
    console.log('hola')
    this.bandera = true;
    
}
guardar2(){
  console.log('hola')
  this.bandera2 = true;
  
}
}