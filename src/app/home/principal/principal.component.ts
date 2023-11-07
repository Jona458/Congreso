import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent  implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {}
  llamarp1(){
    this.ruta.navigate(['pagina1'])
  };
  llamarp2(){
    this.ruta.navigate(['pagina2'])
  };
  llamarregisPro(){
    this.ruta.navigate(['registro-progra'])
  };
  iniciode(){
    this.ruta.navigate(['pagina3'])
  };
}
