import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Column } from 'src/app/interfaces/column';
import { ColumnService } from 'src/app/services/column.service';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ManageColumnComponent } from '../manage-column/manage-column.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  productList: Product[] = [];
  displayedColumns: string[] = [];

  dataSourceTable!: MatTableDataSource<Product>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService: ProductService, private snackBar: MatSnackBar, private columnService: ColumnService, private matDialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.setPaginatorAndSort();
  }

  ngOnInit(): void {
    this.loadColumns();
    this.loadProducts();
  }
  loadProducts() {
    this.productList = this.productService.getProducts();
    this.dataSourceTable = new MatTableDataSource(this.productList);
  }
  setPaginatorAndSort() {
    this.dataSourceTable.paginator = this.paginator;
    this.dataSourceTable.sort = this.sort
  }
  deleteProduct(index: number) {
    this.productService.removeProduct(index);
    this.loadProducts();
    this.setPaginatorAndSort();
    this.snackBar.open('Producto eliminado con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  loadColumns() {
    this.displayedColumns = this.columnService.getOnlyShowsColumns().concat("actions");
  }
  reloadTable() {
    this.loadProducts();
    this.setPaginatorAndSort()
  }
  openManageColumnsDialog() {
    const dialogRef = this.matDialog.open(ManageColumnComponent, {
      width: '600px',
      height: '500px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.loadColumns();
    });
  }
}
