import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProducts: Product[] = [
    { name: 'Adrian', price: 5.4, format: 'black', brand: 'Enim aut.' },
    { name: 'Verna', price: 5.13, format: 'azure', brand: 'Voluptatibus voluptas.' },
    { name: 'Lelia', price: 5.75, format: 'gold', brand: 'Dolorem saepe' },
    { name: 'Perlie', price: 5.78, format: 'white', brand: 'Repundiandae minima' },
    { name: 'Noemi', price: 8.4, format: 'gold', brand: 'Error et.' },
    { name: 'Adrian', price: 5.4, format: 'black', brand: 'Enim aut.' },
    { name: 'Verna', price: 5.13, format: 'azure', brand: 'Voluptatibus voluptas.' },
    { name: 'Lelia', price: 5.75, format: 'gold', brand: 'Dolorem saepe' },
    { name: 'Perlie', price: 5.78, format: 'white', brand: 'Repundiandae minima' },
    { name: 'Noemi', price: 8.4, format: 'gold', brand: 'Error et.' },
    { name: 'Adrian', price: 5.4, format: 'black', brand: 'Enim aut.' },
    { name: 'Verna', price: 5.13, format: 'azure', brand: 'Voluptatibus voluptas.' },
    { name: 'Lelia', price: 5.75, format: 'gold', brand: 'Dolorem saepe' },
    { name: 'Perlie', price: 5.78, format: 'white', brand: 'Repundiandae minima' },
    { name: 'Noemi', price: 8.4, format: 'gold', brand: 'Error et.' },
    { name: 'Adrian', price: 5.4, format: 'black', brand: 'Enim aut.' },
    { name: 'Verna', price: 5.13, format: 'azure', brand: 'Voluptatibus voluptas.' },
    { name: 'Lelia', price: 5.75, format: 'gold', brand: 'Dolorem saepe' },
    { name: 'Perlie', price: 5.78, format: 'white', brand: 'Repundiandae minima' },
    { name: 'Noemi', price: 8.4, format: 'gold', brand: 'Error et.' },
    { name: 'Adrian', price: 5.4, format: 'black', brand: 'Enim aut.' },
    { name: 'Verna', price: 5.13, format: 'azure', brand: 'Voluptatibus voluptas.' },
    { name: 'Lelia', price: 5.75, format: 'gold', brand: 'Dolorem saepe' },
    { name: 'Perlie', price: 5.78, format: 'white', brand: 'Repundiandae minima' },
    { name: 'Noemi', price: 8.4, format: 'gold', brand: 'Error et.' },
  ];
  constructor() { }

  getProducts() {
    return this.listProducts.slice();
  }
  removeProduct(index: number) {
    this.listProducts.splice(index, 1);
  }
}
