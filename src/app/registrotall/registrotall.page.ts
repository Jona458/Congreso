import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrotall',
  templateUrl: './registrotall.page.html',
  styleUrls: ['./registrotall.page.scss'],
})
export class RegistrotallPage implements OnInit {
  public alertButtons = ['OK'];
  registra: FormGroup;
  bandera= true;
  constructor(private form:FormBuilder) {
    this.registra=this.form.group({
      Nombre:['',Validators.required],
      Matricula:[''],
      Password:[''],
      Email:[''],
      Telefono:[''],
    })
   }


  ngOnInit() {
  };
  guardar(){
    console.log('hola')
    this.bandera=false;
  };
  
  aparecerDesaparecer(){
    if(this.bandera){
      this.bandera=false;

    }else{
      this.bandera=true;

    }
    
  };
}
