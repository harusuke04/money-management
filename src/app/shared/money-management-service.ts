import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class moneyManagementService{
    constructor(private http : HttpClient){}
    private httpOptions: any = {
        headers : new HttpHeaders({
            'content-type': 'application/json'
        }),
        observe: 'response'
    }
    private handleError(error: HttpErrorResponse) {
        if(error.error instanceof ErrorEvent){

        }else{
            console.error('NG')
        }
        return throwError
    }

    getMainInfo(): Observable<any>{
        return this.http.get('/main');
    }

    inputBudget(BudgetForm: any): Observable<any>{
        return this.http.post('/input-budget', BudgetForm, this.httpOptions)
    }

    inputSpending(SpendingForm: any): Observable<any>{
        return this.http.post('/input-spending', SpendingForm, this.httpOptions)
    }

    inputSaving(SavingForm: any):Observable<any>{
        return this.http.post('/input-saving', SavingForm, this.httpOptions)
    }
}