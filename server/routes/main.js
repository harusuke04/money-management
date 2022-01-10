const express = require('express')
const router = express.Router();
const budget = require('../model/budget');

//必要情報の取得
router.get('',function(req,res){
    // 予算の取得
     budget.find({}, function(err,findBudgets){
         res.json(findBudgets);
     });   
})
module.exports = router;