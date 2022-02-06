import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { moneyManagementService } from '../shared/money-management-service';

@Component({
  selector: 'app-input-saving',
  templateUrl: './input-saving.component.html',
  styleUrls: ['./input-saving.component.css']
})
export class InputSavingComponent {
  response: any;

  SavingForm = new FormGroup({
    savingRegistDate: new FormControl(''),
    savingName: new FormControl(''),
    savingPrice: new FormControl('')
  })

  constructor(
    private moneyManagementService: moneyManagementService,
    private router: Router
    ){ }

  inputSaving(){
    // 貯金情報の登録
    this.moneyManagementService.inputSaving(this.SavingForm.value).subscribe();

    // main画面遷移
    this.router.navigate(['main'])
  }

}
