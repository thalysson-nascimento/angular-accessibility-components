import { Component, Input, OnInit } from '@angular/core';
import { Product } from './../../interfaces/product.interface';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {
  @Input()
  data: Product[] = [];
  a11yAriaLabelProductListAddOn: string = '';

  constructor() {}

  ngOnInit() {
    this.a11yAriaLabelProductListAddOn = `1 de ${this.data.length}`;

    console.log(this.data);
    console.log(
      (this.a11yAriaLabelProductListAddOn = `1 de ${this.data.length}`)
    );
  }
}
