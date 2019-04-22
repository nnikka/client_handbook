import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { IDropDownFilter } from '../../models/IDropDownFilter'
import { ITextFilter } from '../../models/ITextFilter'
import { FormGroup, FormBuilder } from '@angular/forms'
import { SelectItem } from 'primeng/api'
import { Router, ActivatedRoute } from '@angular/router'
import { CustomValidatorsService } from '../../services/custom-validators.service'
import { take } from 'rxjs/operators'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.css']
})
export class DataFilterComponent implements OnInit, OnDestroy {
  @Input() textFilters: ITextFilter[] = []
  @Input() dropDownFilters: IDropDownFilter[] = []

  form: FormGroup
  routeQuerySubscription: Subscription

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createForm()
  }

  createDropDownOption(options: string[]): SelectItem[] {
    let result: SelectItem[] = []
    options.forEach(option => {
      result.push({ label: option, value: option })
    })
    return result
  }

  createForm() {
    this.routeQuerySubscription = this.route.queryParams.pipe(take(1)).subscribe(params => {
      let group: any = {}
      this.textFilters.forEach(item => {
        group[item.name] = [
          params[item.name] ? params[item.name] : '',
          [CustomValidatorsService.onlyWhitespace]
        ]
      })
      this.dropDownFilters.forEach(item => {
        group[item.name] = params[item.name] ? params[item.name] : ''
      })
      this.form = this.formBuilder.group(group)
    })
  }

  onSubmit() {
    let queryParams = {}
    Object.keys(this.form.value).forEach(name => {
      if (this.form.value[name]) queryParams[name] = this.form.value[name]
      else queryParams[name] = null
    })
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    })
  }

  ngOnDestroy() {
    this.routeQuerySubscription.unsubscribe()
  }
}
