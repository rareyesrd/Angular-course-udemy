import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private el: ElementRef,private renderer: Renderer2) { }

  ngOnInit():void {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '20px');
  }
  
  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#000');
  
  }
}
