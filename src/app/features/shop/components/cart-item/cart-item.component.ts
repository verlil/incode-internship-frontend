import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartItem } from '../../../../shared/models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Output() cartItemQuantityChanged$: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  cartItemForm: FormGroup;

  ngOnInit(): void {
    this.cartItemForm = this.createFormGroup(this.cartItem);
    this.cartItemForm.valueChanges.
    subscribe((form: object) => {
      form['cartItemData']['sum'] = form['cartItemData']['quantity'] * form['cartItemData']['product']['price'];
      this.cartItemQuantityChanged$.emit(form['cartItemData']);
    });
  }

  createFormGroup(cartItem: CartItem): FormGroup {
    return new FormGroup({
      cartItemData: new FormGroup({
        product: new FormControl(cartItem['product']),
        quantity: new FormControl(cartItem['quantity']),
        sum: new FormControl(cartItem['sum'])
      })
    });
  }

}
