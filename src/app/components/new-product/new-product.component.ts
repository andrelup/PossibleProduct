import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  formatList: string[] = ['black', 'azure', 'gold', 'white'];

  priceValue!: number;
  nameValue = '';
  formatValue = '';
  brandValue = '';
  constructor(private productService: ProductService, public dialogRef: MatDialogRef<NewProductComponent>) { }

  ngOnInit(): void {
    this.priceValue = 0
  }

  plusPrice() {
    this.priceValue += 0.1;
    this.priceValue = Math.round(this.priceValue * 100) / 100;
  }
  lessPrice() {
    this.priceValue -= 0.1;
    if (this.priceValue > 0) {
      Math.round(this.priceValue * 100) / 100;
      this.priceValue = Math.round(this.priceValue * 100) / 100;
    } else {
      this.priceValue = 0;
    }
  }

  onSubmit() {
    let product: Product = {
      name: this.nameValue,
      price: this.priceValue,
      format: this.formatValue,
      brand: this.brandValue,
    }
    console.log(product);
    this.productService.addProduct(product);
  }
  disabledSubmitButton() {
    if (this.nameValue && this.brandValue && this.priceValue > 0 && this.brandValue) {
      return false;
    } else {
      return true
    }
  }

}
