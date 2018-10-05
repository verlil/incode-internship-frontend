import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { reducer } from './features/wishlist/@store/reducers/wishlist.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({wishlistPage: reducer} ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
