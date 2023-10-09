import { ActivatedRoute } from '@angular/router';
import { IdfotoService } from './../../idfoto.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent  implements OnInit {
detalleid:any={
};
i:string = "";

  constructor(private serviceidfoto:IdfotoService,private rutaActiva:ActivatedRoute) {

  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe(p => {
      this.i=p.get('id')+"";
      console.log (this.i);
      let id= parseInt(this.i);
      this.detalleid=this.serviceidfoto.gedfotoid((id-1)); 
      console.log(this.detalleid.id) 
    })
    }

}
