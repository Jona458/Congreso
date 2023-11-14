import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdos',
  templateUrl: './formdos.page.html',
  styleUrls: ['./formdos.page.scss'],
})
export class FormdosPage implements OnInit {

  public alertButtons = ['OK'];
  registra: FormGroup;
  bandera= true;
  constructor(private form:FormBuilder) {
    this.registra=this.form.group({
      Nombre:['',Validators.required],
      Correo:['',Validators.email],
      Password:['',Validators.minLength(8)],
      Telefono:['', Validators.required],
      Titulo:['', Validators.required],
      Descripcion:['',Validators.required],
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
