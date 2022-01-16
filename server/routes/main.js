const express = require('express');
const { nextTick } = require('process');
const router = express.Router();
const budget = require('../model/budget');
const income = require('../model/income');
const saving = require('../model/saving');
const spending = require('../model/spending');

//必要情報の取得
router.get('',function(req,res){
    // 予算取得
    budget.find({}, function(err, budgetInf) {
        // 収入取得
        income.find({}, function(err, incomeInf){
            // 貯金取得
            saving.find({}, function(err, savingInf){
                // 支出取得
                spending.find({}, function(err, spendingInf){
                    let temp1 = [];
                    temp2 = temp1.concat(budgetInf,incomeInf);
                    mainInf = temp2.concat(savingInf,spendingInf);
                    res.json(mainInf);
                });
            });
        });
    });
});
module.exports = router;