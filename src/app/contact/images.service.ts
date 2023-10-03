import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  institutions=[
    {
  
      nameInstitution: 'Tecnologico De Ecatepec',
  
      ruta: './assets/tese.jpg',
  
      link: 'http://www.tese.edu.mx/tese2010/'
  
    },
  
    {
    
          nameInstitution: 'Instituto Politecnico Nacional',
    
          ruta: './assets/ipn logo.png',
    
          link: 'https://www.ipn.mx/'
           
    
        },
    
        {
    
          nameInstitution: "Badack",
    
          ruta: './assets/badak.jfif',
    
          link: 'https://badak.mx/contacto/'
    
        },  
  ]
    constructor() { }
    getInstitutions(){
    return this.institutions;
    }
  }