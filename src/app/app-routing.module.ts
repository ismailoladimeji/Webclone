import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  // { 
  //   path: 'expenses', 
  //   component: ExpenseEntry4Component
  // },
  // { 
  //   path: 'expenses/detail/:id', 
  //   component: ExpenseEntryComponent 
  // }, 
  // { 
  //   path: '', redirectTo: 'expenses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
