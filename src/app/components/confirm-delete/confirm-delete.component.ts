import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  // deleteProduct() {
  //   this.productService.removeProduct(this.data.indexToDelete);
  // }

}
