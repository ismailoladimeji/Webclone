import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './select-language/select-language.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectLanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     I18nModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
