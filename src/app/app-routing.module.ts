import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/pages/index/index.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { StorePageComponent } from './components/pages/store-page/store-page.component';
import { FilterPageComponent } from './components/pages/filter-page/filter-page.component';
import { DetailPageComponent } from './components/pages/detail-page/detail-page.component';

const routes: Routes = [
  {
      path: '',
      component: IndexComponent
  },
  {
    path: 'category',
    component: CategoryPageComponent
  },
  {
    path: 'store',
    component: StorePageComponent
  },
  {
    path: 'filter',
    component: FilterPageComponent
  },
  {
      path: 'detail/:id',
      component: DetailPageComponent
  },
  { 
      path: '**', 
      redirectTo: '' 
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
