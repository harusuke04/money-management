const budget = require("./model/budget");
const income = require("./model/income");
const saving = require('./model/saving');
const spending = require('./model/spending');

class FakeDB{
    constructor() {
        this.budgets = [
            {
                budgetRegistDate : 20221225,
                budgetName : '結婚式',
                budgetPrice : 3000000
            },
            {
                budgetRegistDate : 20220401,
                budgetName : '前撮り',
                budgetPrice : 100000
            },
            {
                budgetRegistDate : 20220801,
                budgetName : '新婚旅行',
                budgetPrice : 600000
            }
        ]
        this.incomes = [
            {
                incomeRegistDate : 20220125,
                incomePrice : 300000,
                incomeRegistFlg : 1
            },
            {
                incomeRegistDate : 20220120,
                incomePrice : 300000,
                incomeRegistFlg : 2
            }
        ]
        this.savings = [
            {
                savingRegistDate : 20220101,
                savingName : '定期貯金',
                savingPrice : 300000
            }
        ]
        this.spendings = [
            {
                spendingRegistDate : 20220101,
                spendingName : 'ベビーベッド',
                spendingPrice : 100000

            }
        ]
    }
    
    async initDb(){
        await this.cleanDb();
        // this.pushMainToDb();
        this.pushBudgetToDb();
        this.pushIncomeToDb();
        this.pushSavingToDb();
        this.pushSpendingToDb();
    }

    async cleanDb(){
        // await moneyManagement.deleteMany({});
        await budget.deleteMany({});
        await income.deleteMany({});
        await saving.deleteMany({});
        await spending.deleteMany({});
    }

    pushBudgetToDb() {
        this.budgets.forEach(
            (budgetImport) => {
                const newBudget = new budget(budgetImport);
                newBudget.save();
            }
        )
    }
    pushIncomeToDb(){
        this.incomes.forEach(
            (incomeImport) =>{
                const newIncome =new income(incomeImport);
                newIncome.save();
            }
        )
    }
    pushSavingToDb(){
        this.savings.forEach(
            (savingImport) =>{
                const newSaving =new saving(savingImport);
                newSaving.save();
            }
        )
    }
    pushSpendingToDb(){
        this.spendings.forEach(
            (spendingImport) =>{
                const newSpending =new spending(spendingImport);
                newSpending.save();
            }
        )
    }
}
module.exports = FakeDB
