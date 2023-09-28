import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss'],
})
export class InstitutionsComponent {
  @Input() instituciones!: Institucion[];

  abrirEnlace(enlace: string) {
    window.open(enlace, '_blank');
  }
}

interface Institucion {
  nombre: string;
  imagenUrl: string;
  enlace: string;
}
