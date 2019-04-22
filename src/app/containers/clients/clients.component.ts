import { Component, OnInit, OnDestroy } from '@angular/core'
import { IDropDownFilter } from '../../models/IDropDownFilter'
import { selectGenders } from '../../store/selectors/gender.selectors'
import { ITextFilter } from '../../models/ITextFilter'
import { ISorterItem } from '../../models/ISorterItem'
import { Store, select } from '@ngrx/store'
import { IAppState } from '../../store/state/app.state'
import { take } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router'
import {
  GetClients,
  ClearClientsState,
  PrepareForNextCall
} from '../../store/actions/clients.action'
import { HttpHelperService } from '../../services/http-helper.service'
import { IDataTableCfgItem } from '../../models/IDataTableCfgItem'
import {
  selectClients,
  selectClientsLoadStatus,
  selectClientsLastPage
} from '../../store/selectors/clients.selectors'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit, OnDestroy {
  dataTableCfg: IDataTableCfgItem[] = [
    { key: 'firstName', header: 'First name' },
    { key: 'lastName', header: 'Last name' },
    { key: 'gender', header: 'Gender' },
    { key: 'personalNumber', header: 'Personal number' },
    { key: 'legalCountry', header: 'Legal country' },
    { key: 'legalCity', header: 'Legal city' },
    { key: 'legalAddress', header: 'Legal address' },
    { key: 'actualCountry', header: 'Actual country' },
    { key: 'actualCity', header: 'Actual city' },
    { key: 'actualAddress', header: 'Actual address' }
  ]

  dropDownFilters: IDropDownFilter[] = []
  clients$ = this.store.pipe(select(selectClients))
  clientsLoadStatus$ = this.store.pipe(select(selectClientsLoadStatus))
  clientsLastPage$ = this.store.pipe(select(selectClientsLastPage))
  routeQuerySubscription: Subscription

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

  sorterItems: ISorterItem[] = [
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

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
    private httpHelperService: HttpHelperService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.data['genders']) {
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
    this.watchRouteQueryParams()
  }

  watchRouteQueryParams() {
    this.routeQuerySubscription = this.route.queryParams.subscribe(query => {
      this.store.dispatch(new PrepareForNextCall())
      this.store.dispatch(
        new GetClients(this.httpHelperService.objectToQueryString(query))
      )
    })
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearClientsState())
    this.routeQuerySubscription.unsubscribe()
  }

  handeRowClick($event) {
    this.router.navigate(['client/' + $event.id])
  }
}
