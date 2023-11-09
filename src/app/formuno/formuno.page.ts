import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formuno',
  templateUrl: './formuno.page.html',
  styleUrls: ['./formuno.page.scss'],
})
export class FormunoPage implements OnInit {

  public alertButtons = ['OK'];
  registra: FormGroup;
  bandera= true;
  constructor(private form:FormBuilder) {
    this.registra=this.form.group({
      Nombre:['',Validators.required],
      Email:['',Validators.email],
      Password:['',Validators.minLength(8)],
      Telefono:[''],
      Titulo:[''],
      Descripcion:[''],
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
