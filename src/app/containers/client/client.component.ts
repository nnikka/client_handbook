import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { IAppState } from '../../store/state/app.state'
import {
  selectClient,
  selectClientFailStatus,
  selectClientLoadStatus
} from '../../store/selectors/client.selectors'
import { selectGenders } from '../../store/selectors/gender.selectors'
import {
  GetClient,
  ClearClientState,
  GetClientSuccess
} from '../../store/actions/client.action'
import { ActivatedRoute } from '@angular/router'
import { ClientService } from '../../services/client.service'
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
  clientId: number
  clientIsUpdating: boolean = false

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.clientId = parseInt(this.route.snapshot.paramMap.get('id'))
    this.store.dispatch(new GetClient(this.clientId))
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
}
