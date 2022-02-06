import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { moneyManagementService } from '../shared/money-management-service';

@Component({
  selector: 'app-input-budget',
  templateUrl: './input-budget.component.html',
  styleUrls: ['./input-budget.component.css']
})
export class InputBudgetComponent {
  response: any;

  BudgetForm = new FormGroup({
    budgetRegistDate: new FormControl(''),
    budgetName: new FormControl(''),
    budgetPrice: new FormControl('')
  })

  constructor(
    private moneyManagementService: moneyManagementService,
    private router: Router
  ){ }

  inputBudget(){
    // 予算情報の登録
    this.moneyManagementService.inputBudget(this.BudgetForm.value).subscribe();

    // main画面遷移
    this.router.navigate(['main'])
  }
}

