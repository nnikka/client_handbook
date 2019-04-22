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
import { ToastModule } from 'primeng/toast'
import { MessageService } from 'primeng/api'
import { AccordionModule } from 'primeng/accordion'
import { TableModule } from 'primeng/table'
import { DialogModule } from 'primeng/dialog'

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
    DropdownModule,
    ToastModule,
    AccordionModule,
    TableModule,
    DialogModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
    AccordionModule,
    TableModule,
    DialogModule
  ],
  providers: [MessageService]
})
export class PrimengModule {}
