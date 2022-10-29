import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  productList: Product[] = [];
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

  constructor(private productService: ProductService, private snackBar: MatSnackBar) { }

  ngAfterViewInit(): void {
    this.setPaginatoranSort();
  }

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.productList = this.productService.getProducts();
    this.dataSourceTable = new MatTableDataSource(this.productList);
  }
  setPaginatoranSort() {
    this.dataSourceTable.paginator = this.paginator;
    this.dataSourceTable.sort = this.sort
  }
  deleteProduct(index: number) {
    this.productService.removeProduct(index);
    this.loadProducts();
    this.setPaginatoranSort();
    this.snackBar.open('Producto eliminado con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
