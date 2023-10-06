import { ProgenService } from './../progen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programprin',
  templateUrl: './programprin.component.html',
  styleUrls: ['./programprin.component.scss'],
})
export class ProgramprinComponent  implements OnInit {
  progra:any [] = [];
  constructor(private servprog:ProgenService) { }
    ngOnInit() {
      this.progra=this.servprog.gedProg();
      console.log(this.progra);
    }
  
  }
