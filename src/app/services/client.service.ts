import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IUser } from '../models/IUser'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientUrl = `${environment.api_url}clients`

  constructor(private _http: HttpClient) {}

  create(user: IUser): Observable<any> {
    return this._http.post(this.clientUrl, user)
  }

  getClients(query: string): Observable<IUser[]> {
    return this._http.get<IUser[]>(this.clientUrl + query)
  }
}
