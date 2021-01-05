import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class dropdownDirective {
  @Input() elRef: HTMLElement;
  isOpen = false;
  @HostListener('click') onToggleOpen(): void {
    !this.isOpen
      ? (this.elRef.classList.value = 'dropdown-menu show')
      : (this.elRef.classList.value = 'dropdown-menu');
    this.isOpen = !this.isOpen;
  }
}
