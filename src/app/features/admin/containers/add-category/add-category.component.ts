import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromStore from '../../@store';

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
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    onSubmit(): void {

      this.store.dispatch(new fromStore.AddCategory(this.categoryForm.value));

    }
}
