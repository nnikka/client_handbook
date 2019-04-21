import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IUser } from '../models/IUser'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  createClientUrl = `${environment.api_url}clients`

  constructor(private _http: HttpClient) {}

  create(user: IUser): Observable<any> {
    return this._http.post(this.createClientUrl, user)
  }

  getClient() {
   // return this._http.get()
  }
}
