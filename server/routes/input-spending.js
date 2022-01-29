const express = require('express');
const router = express.Router();
const spending = require("../model/spending");

router.post('',function(req,res){
    this.inputSpendings = [
        {
            spendingRegistDate : req.body.spendingRegistDate,
            spendingName : req.body.spendingName,
            spendingPrice : req.body.spendingPrice
        }
    ]

    this.inputSpendings.forEach(
        (spendingImport) => {
            const inputSpending = new spending(spendingImport);
            inputSpending.save();
        }
    )
})
module.exports = router;