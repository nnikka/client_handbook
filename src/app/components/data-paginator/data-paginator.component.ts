import { Component, OnInit, Input } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { IPager } from '../../models/IPager'
import { PaginatorService } from '../../services/paginator.service'

@Component({
  selector: 'app-data-paginator',
  templateUrl: './data-paginator.component.html',
  styleUrls: ['./data-paginator.component.css']
})
export class DataPaginatorComponent implements OnInit {
  @Input() totalPages: number
  @Input() rowCount: number = 5

  limit: number = this.rowCount
  currentPage: number = 1
  pager: IPager
  lastOtherQueryParams: string = null

  constructor(private router: Router, private route: ActivatedRoute, private paginatorService: PaginatorService) {}

  updateRouteQuery() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { _page: this.currentPage, _limit: this.limit },
      queryParamsHandling: 'merge'
    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) return
    this.currentPage = page
    this.updateRouteQuery()
    this.pager = this.paginatorService.getPager(this.totalPages * this.limit, this.currentPage, this.limit)
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['_limit']) this.limit = parseInt(params['_limit'])
      if (params['_page']) this.currentPage = parseInt(params['_page'])
      let otherQueryParams = {}
      Object.keys(params).forEach(key => {
        if (key !== '_limit' && key !== '_page') otherQueryParams[key] = params[key]
      })
      let otherQueryParamsString = JSON.stringify(otherQueryParams)
      if (this.lastOtherQueryParams !== null && this.lastOtherQueryParams !== otherQueryParamsString) {
        this.currentPage = 1
      }
      this.lastOtherQueryParams = otherQueryParamsString
      this.setPage(this.currentPage)
    })
  }

  ngOnChanges() {
    this.pager = this.paginatorService.getPager(this.totalPages * this.limit, this.currentPage, this.limit)
  }

}
