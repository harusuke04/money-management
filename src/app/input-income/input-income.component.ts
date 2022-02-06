import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { moneyManagementService } from '../shared/money-management-service';

@Component({
  selector: 'app-input-income',
  templateUrl: './input-income.component.html',
  styleUrls: ['./input-income.component.css']
})
export class InputIncomeComponent {
  response: any;

  IncomeForm = new FormGroup({
    incomeRegistDate: new FormControl(''),
    incomePrice: new FormControl(''),
    incomeRegistFlg: new FormControl('')
  })

  constructor(
    private moneyManagementService: moneyManagementService,
    private router: Router
  ){ }

  inputIncome(){
    // 収入情報の登録
    this.moneyManagementService.inputIncome(this.IncomeForm.value).subscribe();

    // main画面遷移
    this.router.navigate(['main'])
  }
}