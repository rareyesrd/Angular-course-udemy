import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultBackground: string = 'transparent';
  @Input('appBetterHighlight') highlightBackground: string = 'blue';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    this.backgroundColor = this.defaultBackground;
    this.renderer.setStyle(this.el.nativeElement, "padding", "20px");
  }
  @HostBinding("style.backgroundColor") backgroundColor: string = this.defaultBackground;
  @HostBinding("style.color") color: string = "#000";
  @HostBinding("style.transition") transition: string = "all 1s ease";

  @HostListener("mouseenter") mouseover() {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    this.backgroundColor = this.highlightBackground;
    this.color = "#fff";
    this.transition = "all .5s ease";
  }

  @HostListener("mouseleave") mouseleave() {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.el.nativeElement, 'color', '#000');
    this.backgroundColor = this.defaultBackground;
    this.color = "#000";
    this.transition = "all .5s ease-and-out";
  }
}
