import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Order } from '../../../shared/models/order';

@Injectable()
export class OrdersService {
  private ordersUrl: string = `${environment.baseUrl}/orders`;

  constructor(private http: HttpClient) {
  }

  createOrder(order: Order): Observable<{ success: boolean, order: Order }> {

    return this.http.post<{ success: boolean, order: Order }>(this.ordersUrl, order);
  }

}
