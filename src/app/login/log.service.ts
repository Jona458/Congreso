import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogService {regis=
  [
    {
      Correo: 'jorge@tese.edu.mx',
      Password: '123'
    },
    {
      Correo: 'Raul@tese.edu.mx',
      Password: '123'
      
    },
    {
      Correo: 'Samuel@tese.edu.mx',
      Password: '123'
    },
    {
      Correo: 'Enrique@tese.edu.mx',
      Password: '123'
      
    }
  ]
  constructor(private router: Router) { }
  getRegis(){
    return this.regis;
  } 
  findUS (Correo: string, Password: string):boolean{
    const validaUs= this.regis.find(u => u.Correo == Correo && u.Password == Password);

    if (validaUs) {
      this.router.navigate(['/program']);
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
