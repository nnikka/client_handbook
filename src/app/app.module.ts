import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
import { environment } from '../environments/environment';
import { PrimengModule } from './primeng/primeng.module'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//ngrx store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/reducers/app.reducers';
import { CurrencyEffects } from './store/effects/currency.effects'
import { DepositTypeEffects } from './store/effects/depositType.effects'

//components ang containers
import { HomeComponent } from './components/home/home.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    AppRoutingModule,
    //ngrx store
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CurrencyEffects, DepositTypeEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
