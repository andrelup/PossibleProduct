import { TestBed } from '@angular/core/testing';
import { Product } from '../interfaces/product';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('obtaining productList', () => {
    const dataList = service.getProducts();
    expect(dataList.length).toBeGreaterThan(0);
    expect(dataList.length).not.toBe(0);
  });
  it('add one product', () => {
    let lengthBeforeAdd = service.getProducts().length;
    const productToAdd: Product = {
      name: 'name',
      price: 1.5,
      format: 'format',
      brand: 'brand'
    }
    service.addProduct(productToAdd);
    let products = service.getProducts();
    expect(products.length).toBe(lengthBeforeAdd + 1);
    expect(products.includes(productToAdd)).toBeTrue()
  });
  it('remove one product', () => {
    let productsBefore = service.getProducts();
    let lengthBeforeAdd = productsBefore.length;
    let indexToDelete = 1;
    service.removeProduct(indexToDelete);
    let productsAfter = service.getProducts();
    expect(productsAfter.length).toBe(lengthBeforeAdd - 1);
    expect(productsAfter.includes(productsBefore[indexToDelete])).toBeFalse();
  });
});
