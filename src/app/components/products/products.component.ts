import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnService } from 'src/app/services/column.service';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
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
  openConfirmDeleteDialog(index: number) {

    const dialogRef = this.matDialog.open(ConfirmDeleteComponent, {
      width: '600px',
      height: '200px',
      data: { indexToDelete: index }
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      if (res) {
        this.snackBar.open('Producto eliminado con éxito', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.reloadTable();
      }
    });
  }
}
