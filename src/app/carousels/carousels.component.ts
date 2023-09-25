import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../carousel.service';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.scss'],
})
export class CarouselsComponent implements OnInit {
  carouselItems: { imageUrl: string; linkUrl: string }[] = []; // Valor predeterminado en la declaración de propiedad

  constructor(private carouselService: CarouselService) {}

  ngOnInit() {
    this.carouselItems = this.carouselService.getCarouselItems();
  }

  openLink(linkUrl: string) {
    // Aquí puedes agregar lógica para abrir el enlace externo
    window.open(linkUrl, '_blank');
  }
}

