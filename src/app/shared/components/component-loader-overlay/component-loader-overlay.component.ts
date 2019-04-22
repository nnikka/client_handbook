import { Component, Input } from '@angular/core';
import FadeInOutAnimation from '../../../animations/fadeInOut.animation'

@Component({
  selector: 'app-component-loader-overlay',
  templateUrl: './component-loader-overlay.component.html',
  styleUrls: ['./component-loader-overlay.component.css'],
  animations: [FadeInOutAnimation]
})
export class ComponentLoaderOverlayComponent {

  @Input() loading: boolean = false

}
