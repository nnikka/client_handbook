import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IUser } from '../models/IUser'
import { map } from 'rxjs/operators'
import HeaderParser from 'parse-link-header'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientUrl = `${environment.api_url}clients`

  constructor(private _http: HttpClient) {}

  create(user: IUser): Observable<any> {
    return this._http.post(this.clientUrl, user)
  }

  edit(id: number, params: any): Observable<IUser> {
    return this._http.put<IUser>(this.clientUrl + '/' + id, { ...params })
  }

  getClients(query: string): Observable<any> {
    return this._http
      .get<any>(this.clientUrl + query, { observe: 'response' })
      .pipe(
        map(resp => {
          let users = resp.body
          let parsed = HeaderParser(resp.headers.get('link'))
          let lastPage = parsed ? parseInt(parsed.last._page) : 1
          return { users: users, lastPage: lastPage }
        })
      )
  }

  getClientById(id: number): Observable<IUser[]> {
    return this._http.get<IUser[]>(this.clientUrl + '?id=' + id)
  }
}
