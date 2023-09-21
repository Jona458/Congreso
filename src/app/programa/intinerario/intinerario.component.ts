import { Component, OnInit } from '@angular/core';
import { ProgramageneralService } from '../programageneral.service';

@Component({
  selector: 'app-intinerario',
  templateUrl: './intinerario.component.html',
  styleUrls: ['./intinerario.component.scss'],
})
export class IntinerarioComponent  implements OnInit {
  progra:any [] = [];

  constructor(private servprog:ProgramageneralService) { }

  ngOnInit() {
    this.progra=this.servprog.getProg();
    console.log(this.progra);
  }

}

