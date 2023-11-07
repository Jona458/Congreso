import { Component, OnInit } from '@angular/core';
import { ContextoService } from '../contexto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deta-confe',
  templateUrl: './deta-confe.component.html',
  styleUrls: ['./deta-confe.component.scss'],
})
export class DetaConfeComponent  implements OnInit {
  detalleid:any={
  };
  i:string = "";
  
  constructor(private serviceContexto:ContextoService, private rutaActiva:ActivatedRoute) {

   }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe(p => {
      this.i=p.get('id')+"";
      console.log (this.i);
      let id= parseInt(this.i);
      this.detalleid=this.serviceContexto.gedcontextoid((id-1)); 
      console.log(this.detalleid.id) 
    })
  }

}