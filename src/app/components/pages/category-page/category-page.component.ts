import { Component } from '@angular/core';
import { PageConstant } from 'src/app/constants/PageConstant';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent {
  pageConstant = PageConstant;
}
