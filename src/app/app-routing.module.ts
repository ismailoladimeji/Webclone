import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { webCloneGuard } from './web-clone.guard';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  { 
    path: 'carts/:id/:groups', 
    component: CardsComponent, canActivate:
    [webCloneGuard]
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
 { path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
