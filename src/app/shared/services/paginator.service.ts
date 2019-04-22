import { Injectable } from '@angular/core'
import { IPager } from '../models/IPager'

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {
  constructor() {}

  getPager(totalItems: number, currentPage: number, pageSize: number): IPager {
    let totalPages = Math.ceil(totalItems / pageSize)
    let startPage: number, endPage: number
    if (totalPages <= 5) {
      startPage = 1
      endPage = totalPages
    } else {
      if (currentPage <= 3) {
        startPage = 1
        endPage = 5
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4
        endPage = totalPages
      } else {
        startPage = currentPage - 2
        endPage = currentPage + 2
      }
    }
    let pages = []
    for (let i = startPage; i <= endPage; i++) pages.push(i)
    return <IPager>{
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      pages: pages
    }
  }
}
