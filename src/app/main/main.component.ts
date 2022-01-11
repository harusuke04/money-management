import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moneyManagementService } from '../shared/money-management-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  mainInf : any

  constructor(private moneyManagementService: moneyManagementService){}

  ngOnInit(): void {
    // 必要情報取得
    const mainInfObservable = this.moneyManagementService.getMainInfo();
    mainInfObservable.subscribe(
      (data) => {
        this.mainInf = data;
      }
    )
  }
}