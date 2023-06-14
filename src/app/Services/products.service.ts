import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = [{ productName: "Milk", price: 2, quantity: 1 }];

  constructor() { }

  getProductList() {
    return this.productList
  };
  addProduct(product: Product) {
    this.productList.push(product)
  }
  getProductDetail(name: string) {
    const product = this.productList.find(product => product.productName === name)
    return product
  }


}
