import { InformacionService } from './../informacion.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-escuelainfo',
  templateUrl: './escuelainfo.component.html',
  styleUrls: ['./escuelainfo.component.scss'],
})
export class EscuelainfoComponent  implements OnInit {

  detalleid:any={
  };
  i:string = "";
  
  constructor(private serviceInformacion:InformacionService, private rutaActiva:ActivatedRoute) { }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe(p => {
      this.i=p.get('id')+"";
      console.log (this.i);
      let id= parseInt(this.i);
      this.detalleid=this.serviceInformacion.gedinformacionid((id-1)); 
      console.log(this.detalleid.id) 
    })
  }
  onClick(){
   let url=new URL('https://www.tecnm.mx/');
   url.searchParams
  }
}