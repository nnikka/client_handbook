import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './components/home/home.component'
import { ErrorComponent } from './components/error/error.component'
import { AddUserComponent } from './containers/add-user/add-user.component'
import { ClientsComponent } from './containers/clients/clients.component'

import { CurrencyGuard } from './guards/currency.guard'
import { DepositTypeGuard } from './guards/deposit-type.guard'
import { GenderGuard } from './guards/gender.guard'

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'error', component: ErrorComponent, data: { animation: 'Error' } },
  {
    path: 'add_client',
    component: AddUserComponent,
    canActivate: [GenderGuard],
    data: { animation: 'AddClient' }
  },
  {
    path: 'clients',
    component: ClientsComponent,
    data: { animation: 'clients' }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
