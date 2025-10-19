import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective {
  @HostBinding('class.visible') isVisible = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const onbserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            // onbserver.unobserve(this.el.nativeElement);
          } else {
            this.isVisible = false;
          }
        });
      },
      { threshold: 0.1 }
    );
    onbserver.observe(this.el.nativeElement);
  }
}
