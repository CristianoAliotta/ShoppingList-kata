import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product?: Product

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct()
    console.log(this.product);

  }

  getProduct() {
    this.router.params.subscribe(params => {
      const name = params['product'];
      console.log(name);

      this.product = this.productService.getProductDetail(name)
    })
  }

}
