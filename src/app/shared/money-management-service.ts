import{ Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class moneyManagementService{
    constructor(private http : HttpClient){}

    getMainInfo(): Observable<any>{
        return this.http.get('/main');
    }
}