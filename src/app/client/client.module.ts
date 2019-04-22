import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { PrimengModule } from '../primeng/primeng.module'
import { RouterModule } from '@angular/router'

import { AddUserComponent as AddUserContainer } from './containers/add-user/add-user.component'
import { ClientComponent as ClientContainer } from './containers/client/client.component'
import { ClientsComponent as ClientsContainer } from './containers/clients/clients.component'
import { ClientFormComponent } from './components/client-form/client-form.component'
import { DepositCardComponent } from './components/deposit-card/deposit-card.component'
import { DepositFormComponent } from './components/deposit-form/deposit-form.component'

import { ClientService } from './services/client.service'
import { DepositService } from './services/deposit.service'

import { GenderGuard } from '../shared/guards/gender.guard'
import { GenderResolver } from '../shared/resolvers/gender-resolver.service'
import { CurrencyResolver } from '../shared/resolvers/currency-resolver.service'
import { DepositTypeResolver } from '../shared/resolvers/deposit-type-resolver.service'

@NgModule({
  declarations: [
    AddUserContainer,
    ClientsContainer,
    ClientContainer,
    ClientFormComponent,
    DepositCardComponent,
    DepositFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimengModule,
    RouterModule.forChild([
      {
        path: 'add_client',
        component: AddUserContainer,
        canActivate: [GenderGuard],
        data: { animation: 'AddClient' }
      },
      {
        path: 'clients',
        component: ClientsContainer,
        data: { animation: 'clients' },
        resolve: { genders: GenderResolver }
      },
      {
        path: 'client/:id',
        component: ClientContainer,
        data: { animation: 'client' },
        resolve: {
          genders: GenderResolver,
          currencies: CurrencyResolver,
          depositTypes: DepositTypeResolver
        }
      }
    ])
  ],
  providers: [ClientService, DepositService]
})
export class ClientModule {}
