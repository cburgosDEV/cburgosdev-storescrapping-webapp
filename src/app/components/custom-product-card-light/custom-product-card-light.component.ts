import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-custom-product-card-light',
  templateUrl: './custom-product-card-light.component.html',
  styleUrls: ['./custom-product-card-light.component.css']
})
export class CustomProductCardLightComponent {
  @Input() product: Product = {
    id: 0,
    name: "",
    lastPrice: 0,
    historicalMinPrice: 0,
    discountRate: 0,
    isHistoricalPrice: false,
    detailHref: "",
    fullDetailHref: "",
    imgSrc: "",
    brand: "",
    store: "",
    productDetailList: [],
    chart: {}
  };
  redondearHaciaArriba(numero: number): number {
    const factor = Math.pow(10, 2);
    return Math.ceil(numero * factor) / factor;
  }
}
