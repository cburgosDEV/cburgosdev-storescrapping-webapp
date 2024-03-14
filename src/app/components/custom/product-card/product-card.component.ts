import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
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
    chart: {},
    categoryId: 0,
    brandId: 0
  };
  @Input() isChartLoading: boolean = false;
  
  redondearHaciaArriba(numero: number): number {
    const factor = Math.pow(10, 2);
    return Math.ceil(numero * factor) / factor;
  }
}
