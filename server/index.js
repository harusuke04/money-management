const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/dev')
const FakeDB = require('./fake-db')

const budgetRoutes = require('./routes/input-budget')
const spendingRoutes = require('./routes/input-spending')
const mainRoutes = require('./routes/main')

const { find } = require('./model/budget');
const { json } = require('stream/consumers');

// mongoDBへの接続、DB初期化
mongoose.connect(config.DB_URI);

// mongoose.connect(config.DB_URI).then(
//     () => {
//         const fakeDB = new FakeDB();
//         fakeDB.initDb();
//     }
// )

// expressの宣言
const app = express()
app.use(bodyParser.json());

// DBから必要情報を取得
app.use('/main', mainRoutes);

// 予算登録
app.use('/input-budget', budgetRoutes);

// 支出登録
app.use('/input-spending', spendingRoutes);

// Node-Server起動
const PORT = process.env.PORT || '3001'
app.listen(PORT,function(){
    console.log('start node-server')
})
