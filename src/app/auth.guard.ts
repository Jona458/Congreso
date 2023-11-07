import { DatosService } from "./pagina3/datos.service";
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private DatosService: DatosService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.DatosService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/pagina3']);
      return false;
    }
  }
}
