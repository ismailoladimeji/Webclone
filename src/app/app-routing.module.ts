import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { BodyComponent } from './body/body.component';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  { 
    path: 'carts/:id/:groups', 
    component: CardsComponent
  },
  { 
    path: 'Home', 
    component: BodyComponent
  },
  { 
    path: 'service-category/:id', 
    component: ServiceCategoryComponent
  },
  { 
    path: 'orderHistory', 
    component: OrderHistoryComponent
  },
  {
  path: '', redirectTo: 'Home', pathMatch: 'full'
 },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
