const MongoClient = require('mongodb').MongoClient
// const test = require('assert')
//内部函数
function _connectDB(callback){
    // 连接url
    const url = 'mongodb://localhost:27017'
    //数据库名称
    const dbName = 'test'
    // 连接使用MongoClient
    MongoClient.connect(url,(err, client)=>{
        if(err){
            callback(err,null)
            return
        }
        // test.equal(null,err)
        console.log('连接成功')
        // 使用test数据库进行操作
        const db = client.db(dbName)
        callback(err,db,client)
    })
}

//插入操作
exports.insertOne = (collectionName,json,callback)=>{
    _connectDB((err, db, client)=>{
        if(err){
            callback(err,null)
            return
        }
        db.collection(collectionName).insertOne(json,(err,result)=>{
            callback(err,result)
            client.close();
        })
    })
}

//查询操作
exports.find = (collectionName,json,callback)=>{
    console.log('1')
    // if(arguments.length != 3){
    //     console.log('2')
    //     callback('参数错误',null)
    //     return
    // }
    
    _connectDB((err, db, client)=>{
        let result = []
        let cursor = db.collection(collectionName).find(json)
        cursor.toArray((err,doc)=>{
            if(err){
                callback(err,null)
                client.close()
                return
            }
                callback(err,doc)
                client.close()
        })
    })
}
