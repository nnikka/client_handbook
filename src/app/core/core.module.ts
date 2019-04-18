import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../primeng/primeng.module'
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [NavBarComponent, HomeComponent],
  imports: [
    RouterModule,
    CommonModule,
    PrimengModule,
    RouterModule.forChild([
      {path : '', component: HomeComponent},
    ])
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
