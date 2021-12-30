import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InputBudgetComponent } from './input-budget/input-budget.component';
import { InputIncomeComponent } from './input-income/input-income.component';
import { InputSavingComponent } from './input-saving/input-saving.component';
import { InputSpendingComponent } from './input-spending/input-spending.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'input-budget', component: InputBudgetComponent},
  { path: 'input-income', component: InputIncomeComponent},
  { path: 'input-saving', component: InputSavingComponent},
  { path: 'input-spending', component: InputSpendingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
