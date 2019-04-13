import { Component, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private el: ElementRef) {}

  scroll$ = fromEvent(this.el.nativeElement, 'scroll');
}
