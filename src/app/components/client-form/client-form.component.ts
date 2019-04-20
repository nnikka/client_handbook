import { Component, OnInit, Input } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { SelectItem } from 'primeng/api'

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  @Input() genders: string[]
  get selectGenders(): SelectItem[] {
    let result: SelectItem[] = []
    this.genders.forEach(item => {
      result.push({ label: item, value: item })
    })
    return result
  }
  form: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, this.OnlyGeorgianOrLatinValidator]],
      lastName: ['', [Validators.required, this.OnlyGeorgianOrLatinValidator]],
      personalNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern(/^[0-9]+$/)
        ]
      ],
      gender: [null, [Validators.required]],
      legalCountry: ['', [Validators.required]],
      legalCity: ['', [Validators.required]],
      legalAddress: ['', [Validators.required]],
      actualCountry: ['', [Validators.required]],
      actualCity: ['', [Validators.required]],
      actualAddress: ['', [Validators.required]]
    })
  }

  OnlyGeorgianOrLatinValidator(control: FormControl) {
    let value = control.value
    if (/^[a-zA-Z]+$/.test(value) || /^[\u10D0-\u10F0]+$/.test(value))
      return null
    return {
      georgianOrLatinPattern: { value: value }
    }
  }
}
