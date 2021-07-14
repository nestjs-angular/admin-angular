import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  lastPage!: number;


  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(page: number = 1): void {
    this.productService.all(page).subscribe(res => {
      this.products = res.data;
      this.lastPage = res.meta.last_page;
    })
  }

  delete(id: number) {
    if (confirm('¿Está seguro de que desea eliminar este registro?')) {
      this.productService.delete(id).subscribe(
        () => {
          this.products = this.products.filter(p => p.id !== id);
        }
      )
    }
  }
}
