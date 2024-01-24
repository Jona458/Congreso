import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage-service.service';

interface Dia {
  iddias: number;
  fecha: Date;
  disponibilidad: string;
}

@Component({
  selector: 'app-detalledias',
  templateUrl: './detalledias.page.html',
  styleUrls: ['./detalledias.page.scss'],
})
export class DetallediasPage implements OnInit {
 
  constructor(private diasService: StorageService) {}

  ngOnInit() {

   }
}
