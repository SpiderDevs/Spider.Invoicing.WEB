import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './components/home/home.component';
import { InvoicingComponent }      from './components/invoicing/invoicing.component';
import { ForbiddenComponent }      from './components/forbidden/forbidden.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'invoicing',     component: InvoicingComponent,  canActivate: [AuthGuard] },
  { path: 'forbidden',     component: ForbiddenComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
