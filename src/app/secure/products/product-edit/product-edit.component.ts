import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  id!: number;

  public form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
    price: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productService.get(this.id).subscribe(product => this.form.patchValue(product));
  }

  submit() {
    this.productService.update(this.id, this.form.value).subscribe(() => this.router.navigateByUrl('/products'));
  }

}
