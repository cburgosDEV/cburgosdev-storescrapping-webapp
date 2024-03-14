import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './components/pages/index/index.component';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { FormsModule } from '@angular/forms';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { FilterSectionComponent } from './components/sections/filter-section/filter-section.component';
import { StorePageComponent } from './components/pages/store-page/store-page.component';
import { FilterPageComponent } from './components/pages/filter-page/filter-page.component';
import { ProductSectionComponent } from './components/sections/product-section/product-section.component';
import { DetailPageComponent } from './components/pages/detail-page/detail-page.component';
import { ProductCardComponent } from './components/custom/product-card/product-card.component';
import { ProductCardSmallComponent } from './components/custom/product-card-small/product-card-small.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CategoryPageComponent,
    FilterSectionComponent,
    StorePageComponent,
    FilterPageComponent,
    ProductSectionComponent,
    DetailPageComponent,
    ProductCardComponent,
    ProductCardSmallComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
