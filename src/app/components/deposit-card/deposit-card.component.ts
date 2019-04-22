import { Component, OnInit, Input } from '@angular/core';
import { IDeposit } from '../../models/IDeposit'

@Component({
  selector: 'app-deposit-card',
  templateUrl: './deposit-card.component.html',
  styleUrls: ['./deposit-card.component.css']
})
export class DepositCardComponent implements OnInit {
  @Input() deposit: IDeposit

  constructor() { }

  ngOnInit() {
    console.log(this.deposit)
  }

}
