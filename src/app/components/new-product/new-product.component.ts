import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  formatList: string[] = ['black', 'azure', 'gold', 'white'];
  newProductForm: FormGroup;
  priceValue!: number;
  nameValue = '';
  formatValue = '';
  brandValue = '';
  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.newProductForm = this.fb.group({
      name: ['', Validators.required],
      price: [''],
      format: ['', Validators.required],
      brand: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.priceValue = 0
  }

  plusPrice() {
    try {
      this.priceValue += 0.1;
      this.priceValue = Math.round(this.priceValue * 100) / 100;
      this.newProductForm.value.price = this.priceValue;
    } catch (error) {
      console.error(error);
    }
  }
  lessPrice() {
    try {
      this.priceValue -= 0.1;
      if (this.priceValue > 0) {

        Math.round(this.priceValue * 100) / 100;
        this.priceValue = Math.round(this.priceValue * 100) / 100;
      } else {
        this.priceValue = 0;
      }
      this.newProductForm.value.price = this.priceValue;
    } catch (error) {
      console.error(error);
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
