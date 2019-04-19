import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  getCurrenciesUrl = `${environment.api_url}currencies`

  constructor(private _http: HttpClient) {}

  public getCurrencies(): Observable<string[]> {
    return this._http.get<string[]>(this.getCurrenciesUrl)
  }
}
