const express = require('express');
const saving = require('../model/saving');
const router = express.Router();

router.post('',function(req,res){
    this.inputSavings = [
        {
            savingRegistDate : req.body.savingRegistDate,
            savingName : req.body.savingName,
            savingPrice : req.body.savingPrice
        }
    ]

    this.inputSavings.forEach(
        (savingImport) => {
            const inputSaving = new saving(savingImport);
            inputSaving.save();
        }
    )
})
module.exports = router;