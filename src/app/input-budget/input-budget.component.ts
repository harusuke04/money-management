import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  constructor(private moneyManagementService: moneyManagementService){}

  inputBudget(){
    // 予算情報の登録
    const budgetObservable = this.moneyManagementService.inputBudget(this.BudgetForm.value);
    budgetObservable.subscribe(
      (data) => {
        this.response = data;
      }
    )
  }
}

