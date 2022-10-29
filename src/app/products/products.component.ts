import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../interfaces/product';

let PRODUCTS_LIST: Product[] = [
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
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  productList: Product[] = PRODUCTS_LIST;
  displayedColumns: string[] = [
    'name',
    'price',
    'format',
    'brand',
    'actions',
  ];

  dataSourceTable!: MatTableDataSource<Product>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSourceTable.paginator = this.paginator;
    this.dataSourceTable.sort = this.sort
  }

  ngOnInit(): void {
    this.dataSourceTable = new MatTableDataSource(this.productList)
  }
  deleteProduct(index: number) {

  }
}
