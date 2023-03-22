import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDigitLimit]'
})
export class DigitLimitDirective {

  constructor() { }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: any) {
    console.log(e);

    if ( e['code'] != e['key']) {

    
      if((e['code'].substr(0,5))!='Digit') {
        e.preventDefault();
      } else if( (e['code'].substr(0,5))=='Digit')  {
        if((e['code'][5]> 5) || (e['code'][5] != e['key']))  {
          console.log('key', e['key'])
          e.preventDefault();
          
        }
      }
      
   }
     
  }

}
