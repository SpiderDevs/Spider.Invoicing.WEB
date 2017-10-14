import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from '../home/home.component';
import { InvoicingComponent }      from '../invoicing/invoicing.component';
import { ForbiddenComponent }      from '../forbidden/forbidden.component';
import { AuthGuard } from '../auth/auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'invoicing',     component: InvoicingComponent, canActivate: [AuthGuard]  },
  { path: 'forbidden',     component: ForbiddenComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
