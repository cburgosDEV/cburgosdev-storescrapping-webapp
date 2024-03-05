import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
      path: '',
      component: IndexComponent
  },
  {
      path: 'detail/:id',
      component: DetailComponent
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
