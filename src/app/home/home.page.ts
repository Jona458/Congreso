import { Component } from '@angular/core';
import { CarruselService } from './carrusel.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
institutions: any[] =[];
  constructor(private serviceInstitution: CarruselService ) {
this.institutions = serviceInstitution.getInstitutions();
console.log(this.institutions);
  }

}
