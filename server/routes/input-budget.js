const express = require('express');
const router = express.Router();
const budget = require("../model/budget");

router.post('',function(req,res){
    this.inputBudgets = [
        {
            budgetRegistDate : req.body.budgetRegistDate,
            budgetName : req.body.budgetName,
            budgetPrice : req.body.budgetPrice
        }
    ]

    this.inputBudgets.forEach(
        (budgetImport) => {
            const inputBudget = new budget(budgetImport);
            inputBudget.save();
        }
    )
})
module.exports = router;