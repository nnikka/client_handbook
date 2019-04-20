import { FormControl, Validators } from '@angular/forms'

const georgianLettersUnicode = /^[\u10D0-\u10F0]+$/
const latinLettersUnicode = /^[a-zA-Z]+$/

export class CustomValidatorsService extends Validators {
  static onlyGeoOrLatLetters(control: FormControl) {
    let value = control.value
    if (latinLettersUnicode.test(value) || georgianLettersUnicode.test(value))
      return null
    return {
      onlyGeoOrLatLetters: { value: value }
    }
  }

  static base64Image(control: FormControl) {
    let type = control.value.split('/')[0]
    console.log(type)
    if (type === 'data:image') return null
    return { base64Image: { value: control.value } }
  }
}
