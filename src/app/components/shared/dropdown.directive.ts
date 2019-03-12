import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
    selector: '[appDropdown]',
    exportAs:'appDropDown'
})
export class DropdownDirective {
    @Input() @HostBinding('class.show') isOpen = false;

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        // this.renderer.addClass(this.element.nativeElement)

    }

}