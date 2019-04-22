import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { environment } from '../environments/environment'
import { PrimengModule } from './primeng/primeng.module'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

//ngrx store
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { appReducers } from './store/reducers/app.reducers'
import { CurrencyEffects } from './store/effects/currency.effects'
import { DepositTypeEffects } from './store/effects/depositType.effects'
import { GenderEffects } from './store/effects/gender.effects'
import { ClientsEffects } from './store/effects/clients.effects'
import { ClientEffects } from './store/effects/client.effects'

//http interceptor
import { HttpConfigInterceptor } from './httpConfig/httpConfig.interceptor'

//modules
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'
import { ClientModule } from './client/client.module'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PrimengModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ClientModule,
    //ngrx store
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([
      CurrencyEffects,
      DepositTypeEffects,
      GenderEffects,
      ClientsEffects,
      ClientEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
