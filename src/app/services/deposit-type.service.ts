import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DepositTypeService {
  getDepositTypesUrl = `${environment.api_url}deposit_types`

  constructor(private _http: HttpClient) {}

  public getDepositTypes(): Observable<string[]> {
    return this._http.get<string[]>(this.getDepositTypesUrl)
  }
}
