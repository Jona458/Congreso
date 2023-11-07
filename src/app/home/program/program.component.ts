import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgenService } from 'src/app/program/progen.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent  implements OnInit {

  progra:any [] = [];
  constructor(private servprog:ProgenService, private ruta:Router) { }
    ngOnInit() {
      this.progra=this.servprog.gedProg();
      console.log(this.progra);
      
    }
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
}

}