import { Component, ElementRef, HostListener, Input } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileInputComponent,
      multi: true
    }
  ]
})
export class FileInputComponent implements ControlValueAccessor {
  @Input() accept: string = '*'
  @Input() label: string = 'Upload'

  onChange: Function
  onTouched: Function
  private file: File | null = null

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.onChange(reader.result)
      this.file = file
    }
    reader.onerror = () => {
      this.onChange(null)
      this.host.nativeElement.value = ''
      this.file = null
    }
  }

  constructor(private host: ElementRef<HTMLInputElement>) {}

  writeValue(value: null) {
    this.host.nativeElement.value = ''
    this.file = null
  }

  registerOnChange(fn: Function) {
    this.onChange = fn
  }

  registerOnTouched(fn: Function) {
    this.onTouched = fn
  }
}
