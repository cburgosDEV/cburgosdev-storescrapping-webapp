import { Component } from '@angular/core';
import { PageConstant } from 'src/app/constants/PageConstant';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent {
  pageConstant = PageConstant;
}
