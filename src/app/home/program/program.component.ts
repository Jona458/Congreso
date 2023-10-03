import { Component, OnInit } from '@angular/core';
import { ProgenService } from 'src/app/program/progen.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent  implements OnInit {

  progra:any [] = [];
  constructor(private servprog:ProgenService) { }
    ngOnInit() {
      this.progra=this.servprog.gedProg();
      console.log(this.progra);
    }
  
  }