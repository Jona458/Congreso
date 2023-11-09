import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-taller',
  templateUrl: './form-taller.page.html',
  styleUrls: ['./form-taller.page.scss'],
})
export class FormTallerPage implements OnInit {
  public alertButtons = ['OK'];
  registra: FormGroup;
  bandera= true;
  constructor(private form:FormBuilder) {
    this.registra=this.form.group({
      Rol:[''],
      Nombre:['',Validators.required],
      Correo:['',Validators.email],
      Password:['',Validators.minLength(8)],
      Telefono:[''],
    })
   }

  ngOnInit() {
  }
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
