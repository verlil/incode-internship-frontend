import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromStore from '../../@store';
import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(
    private store: Store<fromStore.AdminState>,
    private fb: FormBuilder,
    ) { }

    categoryForm: FormGroup = this.fb.group({
      title: [''],
      description: ['']
    });

    newCategory: Category;

    onSubmit(): void {

      this.newCategory = this.categoryForm.value;

      this.store.dispatch(new fromStore.AddCategory(this.newCategory));

    }
}
