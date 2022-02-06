import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { moneyManagementService } from '../shared/money-management-service';

@Component({
  selector: 'app-input-spending',
  templateUrl: './input-spending.component.html',
  styleUrls: ['./input-spending.component.css']
})
export class InputSpendingComponent {
  response: any;

  SpendingForm = new FormGroup({
    spendingRegistDate: new FormControl(''),
    spendingName: new FormControl(''),
    spendingPrice: new FormControl('')
  })

  constructor(
    private moneyManagementService: moneyManagementService,
    private router: Router
  ){ }

  inputSpending(){
    // 支出情報の登録
    this.moneyManagementService.inputSpending(this.SpendingForm.value).subscribe();

    // main画面遷移
    this.router.navigate(['main'])
  }
}