const budget = require("./model/budget");
const income = require("./model/income");

class FakeDB{
    constructor() {
        this.budgets = [
            {
                date : 20221225,
                budgetName : '結婚式',
                price : 3000000
            },
            {
                date : 20220401,
                budgetName : '前撮り',
                price : 100000
            },
            {
                date : 20220801,
                budgetName : '新婚旅行',
                price : 600000
            }
        ]
        this.incomes = [
            {
                date : 20220125,
                income : 300000,
                flg : 1
            },
            {
                date : 20220120,
                income : 300000,
                flg : 2
            }
        ]
    }
    
    async initDb(){
        await this.cleanDb();
        this.pushBudgetToDb();
        this.pushIncomeToDb();
    }

    async cleanDb(){
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
