import { Component } from '@angular/core';
import { PageConstant } from 'src/app/constants/PageConstant';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.css']
})
export class FilterPageComponent {
  pageConstant = PageConstant;
}
