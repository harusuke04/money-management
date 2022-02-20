import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { moneyManagementService } from '../shared/money-management-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errors:any = [];
  response: any;

  LoginForm = new FormGroup({
    loginId: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private moneyManagementService: moneyManagementService,
    private router: Router
  ){ }

  login(){
    // ログイン情報
    const observable = this.moneyManagementService.login(this.LoginForm.value);
    observable.subscribe({
      next: () =>{
        this.router.navigate(['/main'])
      },
      error: (err: HttpErrorResponse) =>{
        this.errors = err.error.errors
      }
    })
  }
}