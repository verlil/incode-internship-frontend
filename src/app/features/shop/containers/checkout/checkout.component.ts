import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromShopStore from '../../@store';
import * as fromCoreStore from '../../../../core/@store';
import { User } from '../../../../shared/models/user';
import { CartItem } from '../../../../shared/models/cart-item';
import { Order } from '../../../../shared/models/order';
import { OrderItem } from '../../../../shared/models/order-item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  paymentForm: FormGroup;

  total$: Observable<number>;
  client$: Observable<User>;
  cartEntities$: Observable<{[id: string]: CartItem}>;

  order: Order = new Order();

  cardNumberRegExp: RegExp = new RegExp('[0-9]{16}');
  cardholderNameRegExp: RegExp = new RegExp('([a-zA-z]{1,}[ ]){1,}[a-zA-z]{1,}');
  expiryDateRegExp: RegExp = new RegExp('[0-9]{2}[/][0-9]{2}');
  securityCodeRegExp: RegExp = new RegExp('[0-9]{3}');

  constructor(private shopStore: Store<fromShopStore.ShopState>,
              private coreStore: Store<fromCoreStore.CoreState>) {
    this.order.items = {};
  }

  ngOnInit(): void {
    this.paymentForm = this.createFormGroup();

    this.total$ = this.shopStore.pipe(select(fromShopStore.getCartTotalSum));
    this.client$ = this.coreStore.pipe(select(fromCoreStore.selectUser));
    this.cartEntities$ = this.shopStore.pipe(select(fromShopStore.getCartEntities));

    this.total$.subscribe(
      (total: number) => {
        this.order.total = total;
      }
    );
    this.client$.subscribe(
      (client: User) => {
        this.order.client = client;
      }
    );
    this.cartEntities$.subscribe(
      (cartEntities: {[id: string]: CartItem}) => {
        for (const key in cartEntities) {
          if (cartEntities.hasOwnProperty(key)) {
            this.order.items[key] = new OrderItem();
            this.order.items[key]['product'] = cartEntities[key]['product'];
            this.order.items[key]['quantity'] = cartEntities[key]['quantity'];
          }
        }
      }
    );
  }

  onSubmit(): void {
    this.order.date = new Date().getTime();
    this.shopStore.dispatch(new fromShopStore.CreateOrder(this.order));
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      card_number: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.cardNumberRegExp)
        ])
      ),
      cardholder_name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.cardholderNameRegExp)
        ])
      ),
      expiry_date: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.expiryDateRegExp)
        ])
      ),
      security_code: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.securityCodeRegExp)
        ])
      )
    });
  }
}
