import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = 'green';
    this.el.nativeElement.style.color = '#fff';
    this.el.nativeElement.style.padding = '20px';

  }
}
