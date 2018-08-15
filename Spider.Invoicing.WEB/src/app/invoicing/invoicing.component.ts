import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { ResponseBase } from '../models/response.base';
import { Invoice } from './models/invoice.model';

import { InvoicesDataSource } from './invoices.datasource';
import { OidcSecurityService } from '../auth/services/oidc.security.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.css']
})
export class InvoicingComponent implements OnInit {

  public displayedColumns = ['number', 'net', 'vat', 'gross', 'created_at'];
  public dataSource: InvoicesDataSource;
  public invoicesIsLoading: boolean;
  public apiUrl: string;
  router: Router;

  constructor(private http: HttpClient, private oidcSecurityService: OidcSecurityService, private _router: Router) {
    this.apiUrl = environment.invoicingApi;
    this.dataSource = new InvoicesDataSource(http, oidcSecurityService);
    this.dataSource.getIsLoading().subscribe(value => { this.invoicesIsLoading = value; });
    this.router = _router;
  }

  ngOnInit() {
  }

  public newInvoice(event) {
    this.router.navigate(['/invoicing/new']);
  }
}

