import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(elem: ElementRef, rendere: Renderer2) {
    rendere.setStyle(elem.nativeElement, 'color', 'red');
  }

}
