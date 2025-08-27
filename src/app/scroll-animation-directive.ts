import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');
    elements.forEach((element:any) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        this.renderer.addClass(element, 'in-view');
      } else {
        this.renderer.removeClass(element, 'in-view');
      }
    });
  }
}
