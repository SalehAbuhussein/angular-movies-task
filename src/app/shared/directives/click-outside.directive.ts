import { Directive, ElementRef, EventEmitter, HostListener, inject, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>;
  private _element = inject(ElementRef);

  @HostListener('document:click', ['$event.target'])
  onMouseClick(target: HTMLElement) {
    const isClickInsideElement = (<HTMLElement>this._element.nativeElement).contains(target);

    if (!isClickInsideElement) {
      this.clickOutside.emit();
    }
  }
}
