import { Component } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { IAppState } from '../../store/state/app.state'
import { selectGenders } from '../../store/selectors/gender.selectors'
import { ClientService } from '../../services/client.service'
import { MessageService } from 'primeng/api'
import { IUser } from '../../models/IUser'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  genders$ = this.store.pipe(select(selectGenders))
  loading: boolean = false

  constructor(
    private store: Store<IAppState>,
    private clientService: ClientService,
    private messageService: MessageService
  ) {}

  handleSave($event) {
    this.loading = true
    this.clientService.create(<IUser>{ id: Date.now(), ...$event }).subscribe(
      data => {
        this.loading = false
        this.messageService.add({
          severity: 'success',
          summary: 'Congratulations',
          detail: 'Client has been added successfully'
        })
      },
      error => {
        this.loading = false
        this.messageService.add({
          severity: 'error',
          summary: 'Ooops!!!',
          detail: 'Client has not been added'
        })
      }
    )
  }
}
