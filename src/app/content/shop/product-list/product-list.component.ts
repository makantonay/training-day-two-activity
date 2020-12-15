import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'Toyota',
      description: 'Ipsum. Sed arcu nibh, fringilla vitae odio non, tincidunt cursus risus. Curabitur rutrum quis mauris hendrerit tempor. Nullam in gravida ipsum. Aliqu',
      price: 'P848484',
      image: 'https://cdn.autoportal.com/img/new-cars-gallery/toyota/etios-liva/colors/d0c8942106b5a770e34ff3f3dea125ef.jpg',

    },
    {
      id: 2,
      name: 'Honda',
      description: 'Nec sapien aliquam, tincidunt augue in, iaculis nisi. Mauris faucibus risus justo, vestibulum commodo odio semper',
      price: 'P338484',
      image: 'https://visor.ph/wp-content/uploads/2020/02/honda-2019-sales-per-model-main.jpg',

    },
    {
      id: 3,
      name: 'Ford',
      description: "Fblandit dolor. Vivamus quis facilisis erat, at bibendum quam. Curabitur ultricies tellus luctus, dignissim ex sit amet, tempor elit. Aliquam tincidunt lorem congue, tempus orci a, bibendum turpis. Nulla at malesuada mi. Mauris mollis.",
      price: 'P12231',
      image: 'https://images.summitmedia-digital.com/topgear/images/2020/07/06/2020-ford-territory-ph-launch-01-1594009547.jpg',

    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
