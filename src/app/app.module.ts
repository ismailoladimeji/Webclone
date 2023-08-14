import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { BodyComponent } from './body/body.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { CartsComponent } from './carts/carts.component';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { ClientAreaComponent } from './client-area/client-area.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PaymentinitiateComponent } from './paymentinitiate/paymentinitiate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SelectLanguageComponent,
    BodyComponent,
    CardsComponent,
    FooterComponent,
    CartsComponent,
    ServiceCategoryComponent,
    ClientAreaComponent,
    OrderHistoryComponent,
    PaymentinitiateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     I18nModule,
     FormsModule,
ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
