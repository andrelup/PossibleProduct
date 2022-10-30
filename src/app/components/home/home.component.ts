import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countProducts!: number;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.countProducts = this.productService.countProducts()
  }

}
