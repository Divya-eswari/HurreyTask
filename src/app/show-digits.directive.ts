import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowDigits]'
})
export class ShowDigitsDirective {

  constructor() { }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: any) {
    console.log(e);

    if (e['code']!='Backspace') {

      if (((e['code'].substr(0,5))!='Digit') ||  (e['code'][5] != e['key']))  {
        e.preventDefault();
      }
    }
     
  }
  
}
