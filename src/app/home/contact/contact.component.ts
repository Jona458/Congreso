import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent  implements OnInit {
  telefono: string = '01 (55) 50 00 23 00';
  direccion: string = 'Av. Tecnológico S/N Col. Valle de Anáhuac, Ecatepec de Morelos, Estado de México';
  codigoPostal: string = 'C.P. 55210';
  constructor() { }

  ngOnInit() {}

}
