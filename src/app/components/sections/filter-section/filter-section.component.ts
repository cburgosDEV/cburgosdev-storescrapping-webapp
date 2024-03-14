import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/Brand';
import { Store } from 'src/app/models/Store';
import { StoreService } from 'src/app/services/store.service';
import { PageConstant } from 'src/app/constants/PageConstant';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent {
  @Input() page : string = "";

  category: number = 0;
  store: string = "";
  brand: string = "";
  productName: string = "";

  listBrands: Brand[] = [];
  isLoadingBrands: boolean = false;
  selectedBrands: number[] = [];

  listStores: Store[] = [];
  isLoadingStores: boolean = false;
  selectedStores: number[] = [];

  listCategories: Store[] = [];
  isLoadingCategories: boolean = false;
  selectedCategories: number[] = [];

  constructor(private storeService: StoreService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() { 
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
      this.brand = params['brand'];
      this.store = params['store'];
      
      console.log('Page:', this.page);
      console.log('Category:', this.category);
      console.log('Brand:', this.brand);
      console.log('Product:', this.productName);
      console.log('Store:', this.store);

      if(this.page == PageConstant.CATEGORY) {
        this.getStores();
        this.getBrands(this.category);
      } else if(this.page == PageConstant.STORE) {
        this.getStores();
        this.getBrands(this.category);
      } else if (this.page == PageConstant.FILTER) {
        this.getStores();
        this.getBrands(this.category);
        this.getCategories();
      }
    });
  }
  getBrands(category: number) : void {
    this.isLoadingBrands = true;
    this.storeService.getBrands(category).subscribe(result => {
      this.isLoadingBrands = false;
      this.listBrands = result;
    }, error => {
      this.isLoadingBrands = false;
      console.log(error);
    });
  }
  getStores() : void {
    this.isLoadingStores = true;
    this.storeService.getStores().subscribe(result => {
      this.isLoadingStores = false;
      this.listStores = result;
    }, error => {
      this.isLoadingStores = false;
      console.log(error);
    });
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
  storeCheckbox(id: number) : void {
    const index = this.selectedStores.indexOf(id);

    if (index === -1) {
      this.selectedStores.push(id);
    } else {
      this.selectedStores.splice(index, 1);
    }

    console.log(id);
    console.log(this.selectedStores);
  }
  filter() : void {
    this.store = this.selectedStores.join();
    this.brand = this.selectedBrands.join();
    this.router.navigate(['/content'], 
      { queryParams: 
        { 
          page: 1, 
          category: this.category,
          brand: this.brand,
          store: this.store,
        } 
      });
  }
  resetFilters() : void {
    this.brand = "";
    this.store = "";
    this.selectedBrands = [];
    this.selectedStores = [];
    this.router.navigate(['/content'], 
      { queryParams: 
        { 
          page: 1, 
          category: this.category,
          brand: this.brand,
          store: this.store
        } 
      });
  }
}
