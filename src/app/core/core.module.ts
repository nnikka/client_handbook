import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component'
import { HomeComponent } from './components/home/home.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { RouterModule } from '@angular/router'
import { PrimengModule } from '../primeng/primeng.module'
import { PageLoaderComponent } from './components/page-loader/page-loader.component'

@NgModule({
  declarations: [ErrorComponent, HomeComponent, NavBarComponent, PageLoaderComponent],
  imports: [PrimengModule, CommonModule, RouterModule.forChild([])],
  exports: [NavBarComponent, PageLoaderComponent]
})
export class CoreModule {}
