import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import Chart from 'chart.js/auto';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  productId: number = 0;
  isLoading: boolean = false;
  product: Product = {
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
  productRecordList: any[] = [];
  productDetailList: any[] = [];
  chart: any = []

  constructor(private route: ActivatedRoute, private storeService: StoreService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });
    this.getProduct(this.productId);
  }
  getProduct(productId: number) : void{
    this.storeService.getProduct(productId).subscribe(result => {
      this.isLoading = false;
      this.product = result;
      this.productRecordList = result.productRecordList;
      this.productDetailList = result.productDetailList;
      this.buildChartDays();
      this.buildChartToday();
      console.log(result);
    }, error => {
      this.isLoading = false;
      console.log(error);
    });
  }
  buildChartDays() : void {
    console.log("MyChartDays");
    this.chart = new Chart('MyChartDays', {
      type: 'line',
      data: {
        labels: this.productRecordList.map(x => x.formatedDate), 
	       datasets: [
          {
            label: this.product.name,
            data: this.productRecordList.map(x => x.price),
            backgroundColor: 'gray'
          },  
        ]
      },
      options: {
        aspectRatio: 7
      }
    });
  }
  buildChartToday() : void {
    console.log("MyChartToday");
    this.chart = new Chart('MyChartToday', {
      type: 'line',
      data: {
        labels: this.productDetailList.map(x => x.formatedDate), 
	       datasets: [
          {
            label: this.product.name,
            data: this.productDetailList.map(x => x.minPrice),
            backgroundColor: 'gray'
          },  
        ]
      },
      options: {
        aspectRatio: 3
      }
    });
  }
}
