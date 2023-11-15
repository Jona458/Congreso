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
  limp = true;
  list = true;
  constructor(private form:FormBuilder) {
    this.registra=this.form.group({
      Nombre:['',Validators.required],
      Correo:['',Validators.email],
      Password:['',Validators.minLength(8)],
      Telefono:['',Validators.required],
      Fecha:['' ,Validators.required],
      Horario:['',Validators.required],
      Tipoequipo:['',Validators.required],
    })
   }


  ngOnInit() {
  };
  guardar(){
    console.log(this.registra)
    this.bandera=false;
  };
 limpiar(){
    console.log(this.registra)
    this.limp=false;
  };
  listar(){
    console.log(this.registra)
    this.list=false;
  };
  aparecerDesaparecer(){
    if(this.bandera){
      this.bandera=false;

    }else{
      this.bandera=true;

    }
    
  };
}
