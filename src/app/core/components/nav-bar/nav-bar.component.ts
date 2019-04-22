import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  menuItems: MenuItem[]

  constructor() {}

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/']
      },
      {
        label: 'Add client',
        icon: 'pi pi-fw pi-user-plus',
        routerLink: ['/add_client']
      },
      {
        label: 'Clients',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/clients'],
        routerLinkActiveOptions: { exact: true }
      }
    ]
  }
}
