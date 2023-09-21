import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarruselService {
  institutions = [
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
    {
      nameInstitution: "Buena Ventura",
      ruta: './assets/buenaVentura.jpg',
      link: 'https://www.usbbog.edu.co/'
    },
    {
      nameInstitution: "CCAI",
      ruta: './assets/CCAI.jfif',
      link: 'https://ccaitese.com/'
    },
    {
      nameInstitution: "Ciencias de Sistemas",
      ruta: './assets/CeinciaDeSIstemas.jpeg',
      link: ''
    },
    {
      nameInstitution: "Chanpingo",
      ruta: './assets/chapingo.png',
      link: 'https://www.bing.com/search?q=chanpingo+pagina&qs=n&form=QBRE&sp=-1&lq=0&pq=chanpingo+pagina&sc=10-16&sk=&cvid=3E3EEB4532024C6C82454F93D28602B8&ghsh=0&ghacc=0&ghpl='
    },
    {
      nameInstitution: "Club Robotica",
      ruta: './assets/clubRobotica.jpeg',
      link: ''
    },
    {
      nameInstitution: "Computo IPN",
      ruta: './assets/computoIPN.png',
      link: 'https://www.escom.ipn.mx/'
    },
    
    {
      nameInstitution: "NDS",
      ruta: './assets/NDS.png',
      link: ''
    },
    {
      nameInstitution: "MIRAI",
      ruta: './assets/mirai.png',
      link: ''
    },
    {
      nameInstitution: "ODOO",
      ruta: './assets/odoo.png',
      link: ''
    },
    
    {
      nameInstitution: "TESCO",
      ruta: './assets/tesco.jfif',
      link: 'http://tecnologicodecoacalco.edu.mx/TESCO/INICIO/INICIO.php'
    },
    {
      nameInstitution: "TESCHI",
      ruta: './assets/TESCHI.jpg',
      link: 'https://www.teschi.edu.mx/'
    },
    
    
    
  ]

  constructor() { 

  }
  getInstitutions(){
    return this.institutions;
  }
}
