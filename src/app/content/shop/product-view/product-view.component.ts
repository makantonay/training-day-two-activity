import { GlobalService } from './../../../services/global.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {

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

  @Input() selectedProduct: any;
  constructor(
    private router: ActivatedRoute,
    private _globalService: GlobalService
    ) {
    console.log(this.router.snapshot.params.id)
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        const id = params.id;

        const selected = this.products.filter(
          (product) => {
            return +product.id === +id;
          }
        );

        if(selected.length > 0){
          this.selectedProduct = selected[0];
          this._globalService.subjectName.next(this.selectedProduct.name);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this._globalService.subjectName.next('');
  }

}
