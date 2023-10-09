import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  registra:FormGroup;
  bandera=true;
  /*registra:FormGroup=new FormGroup ({
    Nombre:new FormControl('Erick')
  }); */
  constructor(private form:FormBuilder) { 
    this.registra=this.form.group({
      Nombre:['Holaaa',Validators.required],
      Matricula:['Holaaa'],
      Password:['Holaaa'],
      Email:['Holaaa'],
      Telefono:['Holaaa'],
    })

    
  }

  ngOnInit() {
   /* this.registra = this.form.group({
      Nombre:['Erick']
    }); */
  }
  guardar(){
    console.log('hola')
    this.bandera=false;
  };
}
