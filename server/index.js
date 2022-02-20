const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/dev')
const FakeDB = require('./fake-db')

const loginRoutes = require('./routes/login')
const mainRoutes = require('./routes/main')
const budgetRoutes = require('./routes/input-budget')
const incomeRoutes = require('./routes/input-income')
const spendingRoutes = require('./routes/input-spending')
const savingRoutes = require('./routes/input-saving')

const path =require('path')
const appPath = path.join(__dirname,'..','dist','money-management');

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

// ログイン認証
app.use('/login',loginRoutes);

// DBから必要情報を取得
app.use('/main', mainRoutes);

// 予算登録
app.use('/input-budget', budgetRoutes);

// 収入登録
app.use('/input-income', incomeRoutes);

// 支出登録
app.use('/input-spending', spendingRoutes);

// 貯金登録
app.use('/input-saving', savingRoutes);

app.use(express.static(appPath));
app.get("*", function(req,res){
    res.sendFile(path.resolve(appPath,'index.html'));

})
// Node-Server起動
const PORT = process.env.PORT || '3001'
app.listen(PORT,function(){
    console.log('start node-server')
})
