import { Component, OnInit, Input } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { SelectItem } from 'primeng/api'
import { CustomValidatorsService } from '../../services/custom-validators.service'

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

  get imageSrc(): string {
    return this.form.controls['image'].value &&
      this.form.controls['image'].valid
      ? this.form.controls['image'].value
      : 'assets/img/noimage.png'
  }

  form: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: [
        '', [Validators.required, CustomValidatorsService.onlyGeoOrLatLetters]
      ],
      lastName: [
        '', [Validators.required, CustomValidatorsService.onlyGeoOrLatLetters]
      ],
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
      actualAddress: ['', [Validators.required]],
      image: ['', [Validators.required, CustomValidatorsService.base64Image]]
    })

    this.form.valueChanges.subscribe(a => console.log(a))
  }
}
