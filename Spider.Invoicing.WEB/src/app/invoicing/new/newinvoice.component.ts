import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-invoicing-new',
    templateUrl: './newinvoice.component.html',
    styleUrls: ['./newinvoice.component.css']
})
export class NewInvoiceComponent implements OnInit {  

    constructor( ) {
    }

    ngOnInit() {
    }

}

