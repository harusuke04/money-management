import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBudgetComponent } from './input-budget/input-budget.component';
import { HeaderComponent } from './common/header/header.component';
import { InputIncomeComponent } from './input-income/input-income.component';
import { InputSpendingComponent } from './input-spending/input-spending.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputBudgetComponent,
    InputIncomeComponent,
    InputSpendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
