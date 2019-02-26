# MongoDB 学习笔记
```
const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
// 连接url
const url = 'mongodb://localhost:27017';
// 数据库名称
const dbName = 'test';
app.get('/',(req,res)=>{
    // 连接使用MongoClient
    MongoClient.connect(url, function (err, client) {
        // 使用admin数据库进行操作
        const adminDb = client.db(dbName).admin();
        // 列出所有可用的数据库
        adminDb.listDatabases(function (err, dbs) {
            test.equal(null, err);
            test.ok(dbs.databases.length > 0);
            client.close();
        });
    });
})
```
>mongo 3.0系列
```
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

```