import { Component, OnInit } from '@angular/core';
import { moneyManagementService } from '../shared/money-management-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  mainInf : any
  budgetList : any;
  incomeList : any;
  spendingList : any;
  savingList : any;

  constructor(private moneyManagementService: moneyManagementService){}

  ngOnInit(): void {
    // 必要情報取得
    const mainInfObservable = this.moneyManagementService.getMainInfo();
    mainInfObservable.subscribe(
      (data) => {
        this.budgetList = [];
        this.incomeList = [];
        this.spendingList = [];
        this.savingList = [];

        for(var i in data){
          // 予算情報があればリスト追加
          if((data[i].budgetRegistDate != undefined) || (data[i].budgetName != undefined) || (data[i].budgetPrice != undefined)){
            var budget_data = { 
              budgetRegistDate : data[i].budgetRegistDate,
              budgetName : data[i].budgetName,
              budgetPrice : data[i].budgetPrice
            };
            this.budgetList.push(budget_data);
          }
          // 収入情報があればリスト追加
          if((data[i].incomeRegistFlg != undefined) || (data[i].incomePrice != undefined)){
            if(data[i].incomeRegistFlg == 1){
              var income_data = {
                incomeRegistFlg : 'あみ',
                incomePrice : data[i].incomePrice
              };
              this.incomeList.push(income_data);
            }else if(data[i].incomeRegistFlg == 2){
              var income_data = {
                incomeRegistFlg : 'しゅんすけ',
                incomePrice : data[i].incomePrice
              };
              this.incomeList.push(income_data);
            }else{
              var income_data = {
                incomeRegistFlg : `不明`,
                incomePrice : data[i].incomePrice
              };
              this.incomeList.push(income_data);
            }
          }
          
          // 支出があればリスト追加
          if((data[i].spendingRegistDate != undefined) || (data[i].spendingName != undefined) || (data[i].spendingPrice != undefined)){
            var spending_data = { 
              spendingRegistDate : data[i].spendingRegistDate,
              spendingName : data[i].spendingName,
              spendingPrice : data[i].spendingPrice
            };
            this.spendingList.push(spending_data);
          }

          //貯金があればリスト追加
          if((data[i].savingRegistDate != undefined) || (data[i].savingName != undefined) || (data[i].savingPrice != undefined)){
            var saving_data = { 
              savingRegistDate : data[i].savingRegistDate,
              savingName : data[i].savingName,
              savingPrice : data[i].savingPrice
            };
            this.savingList.push(saving_data);
          }
        }
      }
    )
  }
}