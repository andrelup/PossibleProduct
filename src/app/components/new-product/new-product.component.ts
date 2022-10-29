import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  newProductForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.newProductForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required, Validators.min(0)],
      format: ['', Validators.required],
      brand: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
