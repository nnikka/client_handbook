import { Component } from '@angular/core';
import RouteAnimations from './animations/route.animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [RouteAnimations]
})
export class AppComponent {
  title = 'client-handbook';
}
