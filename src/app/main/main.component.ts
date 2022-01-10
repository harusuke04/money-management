import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moneyManagementService } from '../shared/money-management-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  budgets : any 

  constructor(private moneyManagementService: moneyManagementService){}

  ngOnInit(): void {
    // 予算取得
    const budgetObservable = this.moneyManagementService.getbudget();
    budgetObservable.subscribe(
      (data) => {
        this.budgets = data;
        console.log(this.budgets[0].price);
      }      
    )
  }
}
