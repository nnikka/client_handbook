import { Component, OnInit, Input } from '@angular/core'
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

  constructor() {}

  ngOnInit() {

  }
}
