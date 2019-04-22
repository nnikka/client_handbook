import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDeposit } from '../../models/IDeposit'

@Component({
  selector: 'app-deposit-card',
  templateUrl: './deposit-card.component.html',
  styleUrls: ['./deposit-card.component.css']
})
export class DepositCardComponent implements OnInit {
  @Input() deposit: IDeposit
  @Input() closingArr: number[] = []
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>()

  get isLoading(): boolean {
    return this.closingArr.includes(this.deposit.id)
  }

  constructor() { }

  ngOnInit() {}

  onCloseDeposit() {
    this.onClose.emit(this.deposit)
  }

}
