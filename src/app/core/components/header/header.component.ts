import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  @Input() isAuthenticated$: Observable<boolean>;
  @Input() userLogin$: Observable<string>;
  @Output() logout: EventEmitter<boolean> = new EventEmitter();

  onLogout(): void {
    this.logout.emit();
  }
}
