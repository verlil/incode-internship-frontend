import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromStore from '../../@store';
import {Product} from '../../../../shared/models/product.model';

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
      title: [''],
      description: [''],
      category_title: [''],
      thumbnail: [''],
      price: [''],
      stock: [''],
    });

    newProduct: Product;

    onSubmit(): void {

      this.newProduct = this.productForm.value;

      this.store.dispatch(new fromStore.AddProduct(this.newProduct));

    }
}
