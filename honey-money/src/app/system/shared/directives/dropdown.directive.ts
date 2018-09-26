import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dsaDropdown]'
})

export class DropdownDirective {
 @HostBinding('class.open') isOpen = false;

 @HostListener('click') onclick() {
   this.isOpen = !this.isOpen;
 }
}
