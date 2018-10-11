import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Filter } from '../../models/filter';
import { Observable } from 'rxjs';
import { Category } from '../../../../shared/models/category';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() categories$: Observable<Category[]>;
  @Output() filtersChanged$: EventEmitter<Filter> = new EventEmitter<Filter>();
  filtersForm: FormGroup;

  ngOnInit(): void {
    this.filtersForm = this.createFormGroup();
    this.filtersForm.valueChanges.
    subscribe((form: Filter) => {
      this.filtersChanged$.emit(form);
    });
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      price_from: new FormControl(),
      price_to: new FormControl(),
      stock: new FormControl(),
      category_id: new FormControl()
    });
  }

}
