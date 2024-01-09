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
  limp= true;
  constructor(private form:FormBuilder) {
    this.registra=this.form.group({
      Nombre:['',Validators.required],
      Horario:['', Validators.required],
      HorarioFin:['', Validators.required]
    })
   }


  ngOnInit() {
  };
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
