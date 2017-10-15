import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { ResponseBase } from '../models/response.base';
import { Invoice } from './models/invoice.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';


export class InvoicesDataSource extends DataSource<any> {

    private loading = new BehaviorSubject<boolean>(true);

    constructor(private http: HttpClient) {
        super();
    }

    connect(): Observable<Invoice[]> {
        return this.getInvoices().map(data => data.result).finally(() => this.loading.next(false));
    }

    getIsLoading(): Observable<boolean> {
        return this.loading.asObservable();
    }


    disconnect() {
        // No-op
    }

    getInvoices(): Observable<ResponseBase<Invoice[]>> {
        this.loading.next(true);
        return this.http.get<ResponseBase<Invoice[]>>('http://localhost:64343/api/invoicing');
    }
}