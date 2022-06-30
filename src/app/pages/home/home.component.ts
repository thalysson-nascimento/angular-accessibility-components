import { Component, OnInit } from '@angular/core';
import { Product } from './../../shared/interfaces/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  listProduct: Product[] = [];

  ngOnInit() {
    this.listProduct = [
      {
        id: '1',
        title: 'Fundo HSBC',
        subTitle: 'HSBC fundos disponíveis',
      },
      {
        id: '2',
        title: 'Fundo Itaú',
        subTitle: 'Itaú fundos disponíveis',
      },
      {
        id: '3',
        title: 'Fundo Mercado Livre',
        subTitle: 'Fundo Mercado Livre fundos disponíveis',
      },
    ];
  }
}
