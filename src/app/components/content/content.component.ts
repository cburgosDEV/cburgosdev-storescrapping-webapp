import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { StoreService } from 'src/app/services/store.service';
import Chart from 'chart.js/auto';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/Brand';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {
  listProducts: Product[] = [];
  isLoading: boolean = false;
  chart: any = [];
  isChartLoading: boolean = false;
  category: number = 0;
  brand: string = "";
  productName: string = "";

  page: number = 1;
  totalPages: number = 0;
  totalItems: number = 0;

  listBrands: Brand[] = [];
  isLoadingBrands: boolean = false;
  selectedBrands: number[] = [];

  constructor(private storeService: StoreService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() { 
    this.route.queryParams.subscribe(params => {
      this.page = params['page'];
      this.category = params['category'];
      this.brand = params['brand'];
      this.productName = params['product'];
      
      console.log('Page:', this.page);
      console.log('Category:', this.category);
      console.log('Brand:', this.brand);
      console.log('Product:', this.productName);


      this.getProducts(this.page, this.brand, this.category, this.productName);
      this.getBrands();
    });
  }
  getBrands() : void {
    this.isLoadingBrands = true;
    this.storeService.getBrands().subscribe(result => {
      this.isLoadingBrands = false;
      this.listBrands = result;
    }, error => {
      this.isLoadingBrands = false;
      console.log(error);
    });
  }
  getProducts(page: number, brand: string, category: number, productName: string) : void {
    this.listProducts = [];
    this.isLoading = true;
    this.isChartLoading = true;
    this.storeService.getProducts(page, brand, category, productName).subscribe(result => {
      this.isLoading = false;
      this.totalPages = result.totalPages;
      this.totalItems = result.totalElements;
      result.content.forEach((x: any) => {
        let product = new Product(
          x.id,
          x.name, 
          x.lastPrice, 
          x.historicalMinPrice, 
          this.redondearHaciaArriba(x.discountRate, 2), 
          x.isHistoricalPrice, 
          x.detailHref, 
          x.fullDetailHref, 
          x.imgSrc, 
          x.brand, 
          x.store,
          x.productDetailList,
          {});
        this.listProducts.push(product);
      });
      setTimeout(() => {
        this.generateCharts();
        this.isChartLoading = false;
      }, 1000)
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
          aspectRatio: 3,
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
    this.router.navigate(['/'], 
      { queryParams: 
        { 
          page: page, 
          category: this.category,
          brand: this.brand,
          product: this.productName
        } 
      });
  }
  brandCheckbox(id: number) : void {
    const index = this.selectedBrands.indexOf(id);

    if (index === -1) {
      this.selectedBrands.push(id);
    } else {
      this.selectedBrands.splice(index, 1);
    }

    console.log(id);
    console.log(this.selectedBrands);
  }
  brandFilter() : void {
    this.brand = this.selectedBrands.join();
    this.router.navigate(['/'], 
      { queryParams: 
        { 
          page: 1, 
          category: this.category,
          brand: this.brand
        } 
      });
  }
  resetBrandFilter() : void {
    this.brand = "";
    this.selectedBrands = [];
    this.router.navigate(['/'], 
      { queryParams: 
        { 
          page: 1, 
          category: this.category,
          brand: this.brand
        } 
      });
  }
  redondearHaciaArriba(numero: number, decimales: number): number {
    const factor = Math.pow(10, decimales);
    return Math.ceil(numero * factor) / factor;
  }
}
