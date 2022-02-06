import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { moneyManagementService } from '../shared/money-management-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
    // main画面遷移
    this.router.navigate(['/main'])
  }
}