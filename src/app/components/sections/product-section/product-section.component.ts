import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { StoreService } from 'src/app/services/store.service';
import Chart from 'chart.js/auto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent {
  @Input() pageName : string = "";

  listProducts: Product[] = [];
  isLoading: boolean = false;
  chart: any = [];
  isChartLoading: boolean = false;
  category: string = "";
  brand: string = "";
  store: string = "";
  productName: string = "";

  page: number = 1;
  totalPages: number = 0;
  totalItems: number = 0;

  constructor(private storeService: StoreService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() { 
    this.route.queryParams.subscribe(params => {
      this.page = params['page'];
      this.category = params['category'];
      this.brand = params['brand'];
      this.productName = params['product'];
      this.store = params['store'];
      
      console.log('Page:', this.page);
      console.log('Category:', this.category);
      console.log('Brand:', this.brand);
      console.log('Product:', this.productName);
      console.log('Store:', this.store);

      this.getProducts(this.page, this.brand, this.category, this.productName, this.store);
    });
  }
  getProducts(page: number, brand: string, category: string, productName: string, store: string) : void {
    this.listProducts = [];
    this.isLoading = true;
    this.isChartLoading = true;
    this.storeService.getProducts(page, brand, category, productName, store).subscribe(result => {
      this.isLoading = false;
      this.totalPages = result.totalPages;
      this.totalItems = result.totalElements;
      result.content.forEach((x: any) => {
        let product = new Product(
          x.id,
          x.name, 
          x.lastPrice, 
          x.historicalMinPrice, 
          x.discountRate, 
          x.isHistoricalPrice, 
          x.detailHref, 
          x.fullDetailHref, 
          x.imgSrc, 
          x.brand, 
          x.store,
          x.productDetailList,
          {},
          x.categoryId,
          x.brandId,
        );
        this.listProducts.push(product);
      });
      setTimeout(() => {
        this.generateCharts();
        this.isChartLoading = false;
      }, 1000);
    }, error => {
      this.isLoading = false;
      console.log(error);
    });
  }
  generateCharts() : void {
    for(let i = 0; i < this.listProducts.length; i++) {
      this.listProducts[i].chart = this.buildChart(this.listProducts[i]);
    }
  }
  buildChart(product: any) : any {
    try {
      return new Chart('Chart'+product.id, {
        type: 'line',
        data: {
          labels: product.productDetailList.map((x: any) => x.formatedDate), 
           datasets: [
            {
              label: product.name,
              data: product.productDetailList.map((x: any) => x.minPrice),
              backgroundColor: 'gray'
            },  
          ]
        },
        options: {
          aspectRatio: 4,
          responsive: true
        }
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  getPage(page: number) : void {
    console.log(page);
    this.page = page;
    this.router.navigate(['/' + this.pageName], 
      { queryParams: 
        { 
          page: page, 
          category: this.category,
          brand: this.brand,
          product: this.productName,
          store: this.store
        } 
      });
  }
}
