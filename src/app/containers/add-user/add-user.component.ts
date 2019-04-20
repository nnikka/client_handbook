import { Component } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { IAppState } from '../../store/state/app.state'
import { selectGenders } from '../../store/selectors/gender.selectors'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  genders$ = this.store.pipe(select(selectGenders))

  constructor(private store: Store<IAppState>) {}
}
