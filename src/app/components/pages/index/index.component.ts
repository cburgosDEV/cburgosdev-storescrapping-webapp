import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryConstant } from 'src/app/constants/CategoryConstant';
import { Product } from 'src/app/models/Product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  categoryConstants = CategoryConstant;
  listSmartphones: Product[] = [];
  listToys: Product[] = [];
  listLaptops: Product[] = [];
  isLoading: boolean = false;

  constructor(private storeService: StoreService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() { 
    this.route.queryParams.subscribe(params => {      
      this.getProducts();
    });
  }
  getProducts() : void {
    this.listSmartphones = [];
    this.listToys = [];
    this.isLoading = true;

    this.storeService.getProductsWithBestDiscounts().subscribe(result => {
      this.isLoading = false;
      this.listSmartphones = result[this.categoryConstants.SMARTPHONES];
      this.listToys = result[this.categoryConstants.TOYS];
      this.listLaptops = result[this.categoryConstants.LAPTOPS];
      console.log(this.listToys)
    }, error => {
      this.isLoading = false;
      console.log(error);
    });
  }
  goToCategoryPage(category: number) : void {
    this.router.navigate(['/category'], 
    { queryParams: 
      { 
        page: 1, 
        category: category
      } 
    });
  }
}
