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
  priceValue = '';
  nameValue = '';
  formatValue = '';
  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.newProductForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(0.1)],
      format: ['', Validators.required],
      brand: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.priceValue = '0'
  }

  plusPrice() {
    try {
      let priceValue = parseFloat(this.priceValue);
      priceValue += 0.1;
      Math.round(priceValue * 100) / 100;
      this.priceValue = '' + Math.round(priceValue * 100) / 100;
    } catch (error) {
      console.error(error);
    }
  }
  lessPrice() {
    try {
      let priceValue = parseFloat(this.priceValue);
      priceValue -= 0.1;
      if (priceValue > 0) {

        Math.round(priceValue * 100) / 100;
        this.priceValue = '' + Math.round(priceValue * 100) / 100;
      } else {
        this.priceValue = '0';
      }
    } catch (error) {
      console.error(error);
    }
  }
  onSubmit() {
    let product: Product = {
      name: this.newProductForm.value.name,
      price: this.newProductForm.value.price,
      format: this.newProductForm.value.format,
      brand: this.newProductForm.value.brand,
    }
    // this.productService.addProduct()
  }
}
