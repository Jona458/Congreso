import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent  implements OnInit {
  bandera=true;

  constructor(private ruta:Router) { }

  ngOnInit() {}
  llamarp1(){
    this.ruta.navigate(['pagina1'])
  };
  llamarp2(){
    this.ruta.navigate(['pagina2'])
  };
  llamarregistrotall(){
    this.ruta.navigate(['registrotall'])
  };
  aparecerDesaparecer(){
    if(this.bandera){
      this.bandera=false;

    }else{
      this.bandera=true;

    }
    
  };
  
}
