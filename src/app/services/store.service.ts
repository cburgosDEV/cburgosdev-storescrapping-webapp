import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseUrl: string = "http://localhost:8082/api/";

  constructor(private http: HttpClient) { }

  getProducts(page: number, brand: string, category: number, productName: string, store: string) : Observable<any> {
    if(page == undefined) {
      page = 1;
    }
    let pageUrl = this.baseUrl.concat("products?page=" + (page - 1));
    if(brand !== undefined) {
      console.log("brand");
      pageUrl += "&brand=" + brand;
    }
    if(category !== undefined) {
      console.log("category");
      pageUrl += "&category=" + category;
    }
    if(productName !== undefined) {
      console.log("product");
      pageUrl += "&product=" + productName;
    }
    if(store !== undefined) {
      console.log("store");
      pageUrl += "&store=" + store;
    }
    console.log("url to get: " + pageUrl);
    return this.http.get(pageUrl);
  }
  getProduct(productId: number) : Observable<any> {
    let url = this.baseUrl.concat("products/" + productId);
    console.log("url to get: " + url);
    return this.http.get(url);
  }
  getBrands(category: number) : Observable<any> {
    if(category === undefined) {
      category = 0;
    }
    let url = this.baseUrl.concat("brands?category=" + category);
    console.log("url to get: " + url);
    return this.http.get(url);
  }
  getCategories() : Observable<any> {
    let url = this.baseUrl.concat("categories");
    console.log("url to get: " + url);
    return this.http.get(url);
  }
  getProductsWithBestDiscounts() : Observable<any> {
    let url = this.baseUrl.concat("products/bestDiscounts");
    console.log("url to get: " + url);
    return this.http.get(url);
  }

  getStores() : Observable<any> {
    let url = this.baseUrl.concat("stores");
    console.log("url to get: " + url);
    return this.http.get(url);
  }
}
