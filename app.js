const express = require('express')
const app = express()
const db = require('./model/db')

app.get('/add',(req,res)=>{
    db.insertOne('teacher',{
        'username' : 'A'
    },(err,result)=>{
        if(err){
            console.log('失败')
            return 
        }
        res.send('成功')
    })
})
app.get('/find',(req,res)=>{
    db.find('teacher',{},(err,result)=>{
        if(err || '参数错误'){
            res.send('失败')
            return
        }
        console.log(result)
        res.send('成功')
    })
})
app.listen(3000)