import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { IDataTableCfgItem } from '../../models/IDataTableCfgItem'
import FadeInOut from '../../animations/fadeInOut.animation'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  animations: [FadeInOut]
})
export class DataTableComponent implements OnInit {
  @Input() config: IDataTableCfgItem[] = []
  @Input() cols = []
  @Input() loaded: boolean = false
  @Output() onRowClick: EventEmitter<any> = new EventEmitter<any>()

  constructor() {}

  ngOnInit() {}

  handleClick(data) {
    this.onRowClick.emit(data)
  }
}
