import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRestrictName]'
})
export class RestrictNameDirective {

  constructor() { }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: any) {
    console.log(e);
    if((e['code'].substr(0,5))=='Digit') {
      e.preventDefault();
    } 
  }

}
