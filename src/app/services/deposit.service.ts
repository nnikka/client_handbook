import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IDeposit } from '../models/IDeposit'
import { map } from 'rxjs/operators'
import HeaderParser from 'parse-link-header'

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  depositsUrl = `${environment.api_url}deposits`

  constructor(private _http: HttpClient) {}

  create(data): Observable<IDeposit> {
    return this._http.post<IDeposit>(this.depositsUrl, {
      ...data,
      status: 'active'
    })
  }

  getByUserId(id: number): Observable<IDeposit[]> {
    return this._http.get<IDeposit[]>(this.depositsUrl + '?userId=' + id)
  }
}
