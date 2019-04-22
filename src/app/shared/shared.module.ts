import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrimengModule } from '../primeng/primeng.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ComponentLoaderOverlayComponent } from './components/component-loader-overlay/component-loader-overlay.component'
import { DataFilterComponent } from './components/data-filter/data-filter.component'
import { DataPaginatorComponent } from './components/data-paginator/data-paginator.component'
import { DataSorterComponent } from './components/data-sorter/data-sorter.component'
import { DataTableComponent } from './components/data-table/data-table.component'
import { FileInputComponent } from './components/file-input/file-input.component'

import { CurrencyService } from './services/currency.service'
import { CustomValidatorsService } from './services/custom-validators.service'
import { DepositTypeService } from './services/deposit-type.service'
import { GenderService } from './services/gender.service'
import { HttpHelperService } from './services/http-helper.service'
import { PaginatorService } from './services/paginator.service'

import { GenderGuard } from './guards/gender.guard'

import { CurrencyResolver } from './resolvers/currency-resolver.service'
import { DepositTypeResolver } from './resolvers/deposit-type-resolver.service'
import { GenderResolver } from './resolvers/gender-resolver.service'

@NgModule({
  declarations: [
    ComponentLoaderOverlayComponent,
    DataFilterComponent,
    DataPaginatorComponent,
    DataSorterComponent,
    DataTableComponent,
    FileInputComponent
  ],
  imports: [CommonModule, PrimengModule, FormsModule, ReactiveFormsModule],
  exports: [
    ComponentLoaderOverlayComponent,
    DataFilterComponent,
    DataPaginatorComponent,
    DataSorterComponent,
    DataTableComponent,
    FileInputComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CurrencyService,
    CustomValidatorsService,
    DepositTypeService,
    CurrencyService,
    GenderService,
    HttpHelperService,
    PaginatorService,
    GenderGuard,
    CurrencyResolver,
    DepositTypeResolver,
    GenderResolver
  ]
})
export class SharedModule {}
