import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonModule } from 'primeng/button'
import { MenubarModule } from 'primeng/menubar'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { MessagesModule } from 'primeng/messages'
import { MessageModule } from 'primeng/message'
import { CardModule } from 'primeng/card'
import { InputTextModule } from 'primeng/inputtext'
import { DropdownModule } from 'primeng/dropdown'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    CardModule,
    InputTextModule,
    DropdownModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    CardModule,
    InputTextModule,
    DropdownModule
  ]
})
export class PrimengModule {}
