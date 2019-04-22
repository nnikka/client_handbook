export interface IPager {
  totalItems: number
  currentPage: number
  pageSize: number
  totalPages: number
  startPage: number
  endPage: number
  pages: number[]
}
