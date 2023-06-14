import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../Services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild('form') form!: FormGroup;
  productList: Product[] = []

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productList = this.productService.getProductList()
  };

  newProduct() {
    let product = new Product(
      this.form.value.productName,
      this.form.value.productPrice,
      this.form.value.productQuantity
    );
    this.productService.addProduct(product);
    this.form.reset()
  }

}
