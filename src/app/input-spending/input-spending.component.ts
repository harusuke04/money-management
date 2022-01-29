import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  constructor(private moneyManagementService: moneyManagementService){}

  inputSpending(){
    // 支出情報の登録
    const spendingObservable = this.moneyManagementService.inputSpending(this.SpendingForm.value);
    spendingObservable.subscribe(
      (data) => {
        this.response = data;
      }
    )
  }
}
