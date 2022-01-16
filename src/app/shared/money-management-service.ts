import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class moneyManagementService{
    constructor(private http : HttpClient){}
    getMainInfo(): Observable<any>{
        return this.http.get('/main');
    }

    inputBudget(BudgetForm: any): Observable<any>{
        console.log(BudgetForm)
        // return this.http.post('/input-budget',BudgetForm, this.httpOptions)
        return this.http.get('/input-budget');
    }
}