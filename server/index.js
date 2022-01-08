const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/dev')
const FakeDB = require('./fake-db')

const budgetRoutes = require('./routes/budget-regist')

const budgetModel = require("./model/budget");
const incomeModel = require("./model/income");
const income = require('./model/income');
const budget = require('./model/budget');
const { find } = require('./model/budget');
const { json } = require('stream/consumers');

mongoose.connect(config.DB_URI).then(
    () => {
        const fakeDB = new FakeDB();
        fakeDB.initDb();
    }
)

const app = express()

app.get('/test', function(req,res){
    // budget.find({}, function(err,findBudgets){
    //     res.json(findBudgets);
    // });
});

app.use('/budget/regist', budgetRoutes);

const PORT = process.env.PORT || '3001'

app.listen(PORT,function(){
    console.log('TEST')
})
