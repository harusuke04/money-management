const express = require('express');
const router = express.Router();
const login = require("../model/login");

router.post('',function(req,res){
    const loginId = req.body.loginId;
    const password = req.body.password;

    login.findOne({loginId: loginId, password: password},function(err,loginInf){
        if(err){
            return res.status(422).send({errors: [{title: 'User Error', detail: 'Something Error' }]})
        }
        if(!loginInf){
            return res.status(422).send({errors: [{title: 'User Error', detail: 'User Not Found' }]})
        }
        res.json(loginInf);
    })
})
module.exports = router;