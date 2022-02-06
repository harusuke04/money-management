const express = require('express');
const router = express.Router();
const income = require("../model/income");

router.post('',function(req,res){
    this.inputIncomes = [
        {
            incomeRegistDate : req.body.incomeRegistDate,
            incomePrice : req.body.incomePrice,
            incomeRegistFlg : req.body.incomeRegistFlg
        }
    ]

    this.inputIncomes.forEach(
        (incomeImport) => {
            const inputIncome = new income(incomeImport);
            inputIncome.save();
        }
    )
})
module.exports = router;