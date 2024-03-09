import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FormsModule } from '@angular/forms';
import { CustomProductCardComponent } from './components/custom-product-card/custom-product-card.component';
import { CustomProductCardLightComponent } from './components/custom-product-card-light/custom-product-card-light.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    DetailComponent,
    IndexComponent,
    CustomProductCardComponent,
    CustomProductCardLightComponent,
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
