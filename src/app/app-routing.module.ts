import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component'
import { InputBudgetComponent } from './input-budget/input-budget.component';
import { InputIncomeComponent } from './input-income/input-income.component';
import { InputSavingComponent } from './input-saving/input-saving.component';
import { InputSpendingComponent } from './input-spending/input-spending.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'main', component: MainComponent},
  { path: 'main/input-budget', component: InputBudgetComponent},
  { path: 'main/input-income', component: InputIncomeComponent},
  { path: 'main/input-saving', component: InputSavingComponent},
  { path: 'main/input-spending', component: InputSpendingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
