import { Component } from '@angular/core';
import { Category } from './models/Category';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cburgosdev-storescrapping-webapp';
  
  listCategories: Category[] = [];
  isLoadingCategories: boolean = false;
  productName: string = ""

  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {    
    this.getCategories();
  }

  getCategories() : void {
    this.isLoadingCategories = true;
    this.storeService.getCategories().subscribe(result => {
      this.isLoadingCategories = false;
      this.listCategories = result;
    }, error => {
      this.isLoadingCategories = false;
      console.log(error);
    });
  }
  goToCategoryPage(category: number) : void {
    this.router.navigate(['/content'], 
    { queryParams: 
      { 
        page: 1, 
        category: category
      } 
    });
  }
  search() : void {
    this.router.navigate(['/content'], 
      { queryParams: 
        { 
          page: 1, 
          product: this.productName
        } 
      });
  }
}
