import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage-service.service';
import { Router } from '@angular/router'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-dia',
  templateUrl: './editar-dia.page.html',
  styleUrls: ['./editar-dia.page.scss'],
})
export class EditarDiaPage implements OnInit {
  id: any;
  fecha: any;
  disponibilidad: any;
  constructor(public servicio: StorageService, public router: Router, public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  Guardardias() {
    const data = {
      id: this.id,
      fecha: this.fecha,
      disponibilidad: this.disponibilidad
    }
    this.servicio.guardardias(data).subscribe(res => {
      console.log(res);
      this.presentToast('Datos Guardados');
      this.router.navigate(['/listadias'])
    }
    )
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    });
  }
}
