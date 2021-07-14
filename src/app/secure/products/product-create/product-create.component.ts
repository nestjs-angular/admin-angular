import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {


  public form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
    price: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  submit() {
    this.productService.create(this.form.value).subscribe(() => this.router.navigateByUrl('/products'));
  }
}
