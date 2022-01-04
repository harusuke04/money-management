const express = require('express')

const app = express()

app.post('/test', function(req,res){
    res.json({
        'success' : true
    })
})

const PORT = process.env.PORT || '3001'

app.listen(PORT,function(){
    console.log('TEST')
})