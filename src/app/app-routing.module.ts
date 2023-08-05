import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  { 
    path: 'carts/:groups', 
    component: CardsComponent
  },
  { 
    path: 'Home', 
    component: BodyComponent
  },
  {
  path: '', redirectTo: 'Home', pathMatch: 'full'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
