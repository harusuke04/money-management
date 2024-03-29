import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { InputIncomeComponent } from './input-income/input-income.component';
import { InputSpendingComponent } from './input-spending/input-spending.component';
import { InputSavingComponent } from './input-saving/input-saving.component';
import { InputBudgetComponent } from './input-budget/input-budget.component';
import { MainComponent } from './main/main.component';
import { moneyManagementService } from './shared/money-management-service';

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputBudgetComponent,
    InputIncomeComponent,
    InputSpendingComponent,
    InputSavingComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [moneyManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
