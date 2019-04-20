import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './components/home/home.component'
import { ErrorComponent } from './components/error/error.component'
import { AddUserComponent } from './containers/add-user/add-user.component'

import { CurrencyGuard } from './guards/currency.guard'
import { DepositTypeGuard } from './guards/deposit-type.guard'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'error', component: ErrorComponent },
  {
    path: 'add_client',
    component: AddUserComponent,
    canActivate: [CurrencyGuard, DepositTypeGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
