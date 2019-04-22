import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
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

//http interceptor
import { HttpConfigInterceptor } from './httpConfig/httpConfig.interceptor'

//components and containers
import { HomeComponent } from './components/home/home.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { AddUserComponent as AddUserContainerComponent } from './containers/add-user/add-user.component'
import { ErrorComponent } from './components/error/error.component'
import { PageLoaderComponent } from './components/page-loader/page-loader.component'
import { ClientFormComponent } from './components/client-form/client-form.component'
import { FileInputComponent } from './components/file-input/file-input.component'
import { ComponentLoaderOverlayComponent } from './components/component-loader-overlay/component-loader-overlay.component'
import { ClientsComponent as ClientsContainer } from './containers/clients/clients.component'
import { DataFilterComponent } from './components/data-filter/data-filter.component'
import { DataTableComponent } from './components/data-table/data-table.component'
import { DataPaginatorComponent } from './components/data-paginator/data-paginator.component';
import { DataSorterComponent } from './components/data-sorter/data-sorter.component';
import { ClientComponent as ClientContainer } from './containers/client/client.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AddUserContainerComponent,
    ErrorComponent,
    PageLoaderComponent,
    ClientFormComponent,
    FileInputComponent,
    ComponentLoaderOverlayComponent,
    ClientsContainer,
    DataFilterComponent,
    DataTableComponent,
    DataPaginatorComponent,
    DataSorterComponent,
    ClientContainer
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
    EffectsModule.forRoot([
      CurrencyEffects,
      DepositTypeEffects,
      GenderEffects,
      ClientsEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
