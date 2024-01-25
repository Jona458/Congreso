import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage-service.service';
import { environment } from 'src/environments/environment';

interface Dia {
  iddias: number;
  fecha: Date;
  disponibilidad: string;
}

@Component({
  selector: 'app-listadias',
  templateUrl: './listadias.page.html',
  styleUrls: ['./listadias.page.scss'],
})
export class ListadiasPage implements OnInit {
  dias: Dia[] = [];
  constructor(private diasService: StorageService) {
    this.dias = [];
  }

  ionViewWillEnter() {
    this.onlistdias();
  }

  ngOnInit() {


  }

  onlistdias() {
    this.diasService.getDias().subscribe((res: any) => {
      console.log(res);
      this.dias = res.body;
    });
  }

}
