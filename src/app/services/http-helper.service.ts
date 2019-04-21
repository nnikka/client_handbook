import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  constructor() {}

  objectToQueryString(obj: Object): string {
    return Object.keys(obj).reduce(function(str, key, i) {
      var delimiter, val
      delimiter = i === 0 ? '?' : '&'
      key = key
      val = obj[key]
      return [str, delimiter, key, '=', val].join('')
    }, '')
  }
}
