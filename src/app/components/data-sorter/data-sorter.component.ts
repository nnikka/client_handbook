import { Component, OnInit, Input } from '@angular/core'
import { ISorterItem } from '../../models/ISorterItem'
import { SelectItem } from 'primeng/api'
import { Router, ActivatedRoute } from '@angular/router'
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-data-sorter',
  templateUrl: './data-sorter.component.html',
  styleUrls: ['./data-sorter.component.css']
})
export class DataSorterComponent implements OnInit {
  @Input() sorterItems: ISorterItem[] = []

  private sortBy = null

  get sortSelectOptions(): SelectItem[] {
    let result: SelectItem[] = []
    this.sorterItems.forEach(item => {
      result.push({
        label: item.label + ' ascending',
        value: { _sort: item.name, _order: 'asc' }
      })
      result.push({
        label: item.label + ' descending',
        value: { _sort: item.name, _order: 'desc' }
      })
    })
    return result
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      if (params['_sort'] && params['_order']) {
        this.sortBy = { _sort: params['_sort'], _order: params['_order'] }
      }
    })
  }

  handleChange(event) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: event.value,
      queryParamsHandling: 'merge'
    })
  }
}
