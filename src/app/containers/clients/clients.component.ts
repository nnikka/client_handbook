import { Component, OnInit } from '@angular/core'
import { IDropDownFilter } from '../../models/IDropDownFilter'
import { selectGenders } from '../../store/selectors/gender.selectors'
import { ITextFilter } from '../../models/ITextFilter'
import { Store, select } from '@ngrx/store'
import { IAppState } from '../../store/state/app.state'
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  textFilters: ITextFilter[] = [
    { name: 'firstName', label: 'First name' },
    { name: 'lastName', label: 'Last name' },
    { name: 'personalNumber', label: 'Personal number' },
    { name: 'legalCountry', label: 'Legal country' },
    { name: 'legalCity', label: 'Legal city' },
    { name: 'legalAddress', label: 'Legal address' },
    { name: 'actualCountry', label: 'Actual country' },
    { name: 'actualCity', label: 'Actual city' },
    { name: 'actualAddress', label: 'Actual address' }
  ]

  dropDownFilters: IDropDownFilter[] = []

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store
      .pipe(select(selectGenders))
      .pipe(take(1))
      .subscribe(genders => {
        this.dropDownFilters = [
          ...this.dropDownFilters,
          { name: 'gender', label: 'Gender', options: genders }
        ]
      })
  }
}
