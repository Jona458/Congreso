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
  limp= true;
  constructor(private form:FormBuilder) {
    this.registra=this.form.group({
      Rol:['', Validators.required],
      Nombre:['',Validators.required],
      Descripcion: ['',Validators.required],
      Horario: ['',Validators.required],
      Fecha: ['',Validators.required]
      
    })
   }

  ngOnInit() {
  }
  guardar(){
    this.bandera=false;
  };
  limpiar(){
    console.log(this.limp)
    this.limp=false;
  };
  aparecerDesaparecer(){
    if(this.bandera){
      this.bandera=false;

    }else{
      this.bandera=true;

    }
    
  };

}
