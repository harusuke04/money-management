const budget = require("./model/budget");
const income = require("./model/income");

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
    }
    
    async initDb(){
        await this.cleanDb();
        // this.pushMainToDb();
        this.pushBudgetToDb();
        this.pushIncomeToDb();
    }

    async cleanDb(){
        // await moneyManagement.deleteMany({});
        await budget.deleteMany({});
        await income.deleteMany({});
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
}
module.exports = FakeDB
