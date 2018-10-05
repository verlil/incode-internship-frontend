import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromStore from '../../@store';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  {

  constructor(
    private store: Store<fromStore.AdminState>,
    private fb: FormBuilder,
    ) { }

    productForm: FormGroup = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category_title: ['', Validators.required],
      thumbnail: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
    });

    onSubmit(): void {

      this.store.dispatch(new fromStore.AddProduct(this.productForm.value));

    }
}
