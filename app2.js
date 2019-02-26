const express = require('express')
const app = express()
const db = require('./model/db2')

app.get('/add',(req,res)=>{
    db.insert('teacher', [
        { 'username': 'A'}
    ], (err, result) => {
            if (err) {
                res.send('失败')
                return
            } else {
                res.send('成功')
            }
    })
})
app.get('/find',(req,res)=>{
    db.find('teacher', {}, (err, result) => {
        if(err){
            res.send('失败')
            return
        }else{
            res.send(result)
        }
    })
})
app.get('/updata', (req, res) => {
    db.updata('teacher',
    { a: 2 },//arg1
    { $set: { b: 1 } },//arg2
    (err, result) => {
        if (err) {
            res.send('失败')
            return
        } else {
            res.send('成功')
        }
    })
})
app.get('/remove', (req, res) => {
    db.remove('teacher',{ a: 3 }, (err, result) => {
        if (err) {
            res.send('失败')
            return
        } else {
            res.send('成功')
        }
    })
})

app.listen(3000)