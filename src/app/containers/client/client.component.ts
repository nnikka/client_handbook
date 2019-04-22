import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { IAppState } from '../../store/state/app.state'
import {
  selectClient,
  selectClientFailStatus,
  selectClientLoadStatus,
  selectClientDeposits,
  selectClientDepositsFailStatus,
  selectClientDepositsLoadStatus
} from '../../store/selectors/client.selectors'
import { selectGenders } from '../../store/selectors/gender.selectors'
import {
  GetClient,
  ClearClientState,
  GetClientSuccess,
  GetClientDeposits,
  ClientAddDeposit
} from '../../store/actions/client.action'
import { selectDepositTypes } from '../../store/selectors/depositType.selectors'
import { selectCurrencies } from '../../store/selectors/currency.selectors'
import { ActivatedRoute } from '@angular/router'
import { ClientService } from '../../services/client.service'
import { DepositService } from '../../services/deposit.service'
import { IUser } from '../../models/IUser'
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit, OnDestroy {
  genders$ = this.store.pipe(select(selectGenders))
  client$ = this.store.pipe(select(selectClient))
  clientLoaded$ = this.store.pipe(select(selectClientLoadStatus))
  clientFailed$ = this.store.pipe(select(selectClientFailStatus))
  depositTypes$ = this.store.pipe(select(selectDepositTypes))
  currencies$ = this.store.pipe(select(selectCurrencies))
  clientDeposits$ = this.store.pipe(select(selectClientDeposits))
  clientDepositsFailed$ = this.store.pipe(
    select(selectClientDepositsFailStatus)
  )
  clientDepositsLoaded$ = this.store.pipe(
    select(selectClientDepositsLoadStatus)
  )

  clientId: number
  clientIsUpdating: boolean = false
  showAddDepositForm: boolean = false
  depositIsAdding: boolean = false

  get canAddDeposit(): boolean {
    return (
      this.route.snapshot.data.currencies &&
      this.route.snapshot.data.depositTypes
    )
  }

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private messageService: MessageService,
    private depositService: DepositService
  ) {}

  ngOnInit() {
    this.clientId = parseInt(this.route.snapshot.paramMap.get('id'))
    this.store.dispatch(new GetClient(this.clientId))
    this.store.dispatch(new GetClientDeposits(this.clientId))
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearClientState())
  }

  handleSave($event) {
    this.clientIsUpdating = true
    this.clientService.edit(this.clientId, $event).subscribe(
      data => {
        this.store.dispatch(new GetClientSuccess({ ...data } as IUser))
        this.clientIsUpdating = false
        this.messageService.add({
          severity: 'success',
          summary: 'Congratulations',
          detail: 'Client has been updated successfully'
        })
      },
      error => {
        this.clientIsUpdating = false
        this.messageService.add({
          severity: 'error',
          summary: 'Ooops!!!',
          detail: 'Client has not been updated'
        })
      }
    )
  }

  handleAddDeposit($event) {
    this.depositIsAdding = true
    this.depositService
      .create({ ...$event, clientId: this.clientId, id: Date.now() })
      .subscribe(
        data => {
          this.store.dispatch(new ClientAddDeposit(data))
          this.depositIsAdding = false
          this.messageService.add({
            severity: 'success',
            summary: 'Congratulations',
            detail: 'Deposit has been added successfully'
          })
        },
        error => {
          this.depositIsAdding = false
          this.messageService.add({
            severity: 'error',
            summary: 'Ooops!!!',
            detail: 'Deposit has not been added'
          })
        }
      )
  }
}
