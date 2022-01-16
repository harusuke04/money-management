const express = require('express')
const router = express.Router();

router.get('',function(req,res){
    console.log('OK')
    res.json(
        {
            'success':'OK'
        }
    )
})
module.exports = router;