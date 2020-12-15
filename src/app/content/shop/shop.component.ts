import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  title: any;
  productName: any;
  subtitle: any;

  constructor(private _globalService: GlobalService) {
    this.title = 'Shopping Cart';
    this.subtitle = 'Shop now';
  }

  ngOnInit(): void {
    this.title = this._globalService.toUpperCase(this.title);
    this.subtitle = this._globalService.appSubtitle;

    this._globalService.subjectName.subscribe(
      (product: any) => {
        setTimeout(() => {
          this.productName = product;
        }, 10);
      }
    );

  }

}
