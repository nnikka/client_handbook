import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { environment } from '../environments/environment';

import { PrimengModule } from './primeng/primeng.module'
import { CoreModule } from './core/core.module'

import { AppComponent } from './app.component';

//ngrx store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { appReducers } from './store/reducers/app.reducers';
import { CurrencyEffects } from './store/effects/currency.effects'
import { DepositTypeEffects } from './store/effects/depositType.effects'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    CoreModule,
    RouterModule.forRoot([]),
    //ngrx store
    StoreModule.forRoot(appReducers),
    // EffectsModule.forRoot([CurrencyEffects, DepositTypeEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
