import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { SelectItem } from 'primeng/api'

@Component({
  selector: 'app-deposit-form',
  templateUrl: './deposit-form.component.html',
  styleUrls: ['./deposit-form.component.css']
})
export class DepositFormComponent implements OnInit {
  @Input() currencies: string[] = []
  @Input() depositTypes: string[] = []
  @Input() clearOnSubmit: boolean = true
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>()

  get selectCurrencies(): SelectItem[] {
    let result: SelectItem[] = []
    this.currencies.forEach(item => {
      result.push({ label: item, value: item })
    })
    return result
  }

  get selectDepositTypes(): SelectItem[] {
    let result: SelectItem[] = []
    this.depositTypes.forEach(item => {
      result.push({ label: item, value: item })
    })
    return result
  }

  form: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      currency: [null, [Validators.required]],
      depositType: [null, [Validators.required]]
    })
  }

  handleSave() {
    this.onSave.emit(this.form.value)
    if (this.clearOnSubmit) {
      this.form.reset({
        currency: null,
        depositType: null
      })
      this.form.markAsUntouched()
    }
  }
}
