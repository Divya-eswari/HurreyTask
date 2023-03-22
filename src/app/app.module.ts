import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageLogoComponent } from './page-logo/page-logo.component';
import { NameComponent } from './name/name.component';
import { FormsModule } from '@angular/forms';
import { RestrictNameDirective } from './restrict-name.directive';
import { ShowDigitsDirective } from './show-digits.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DigitLimitDirective } from './digit-limit.directive'


@NgModule({
  declarations: [
    AppComponent,
    PageLogoComponent,
    NameComponent,
    RestrictNameDirective,
    ShowDigitsDirective,
    DigitLimitDirective
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
