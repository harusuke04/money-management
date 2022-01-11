const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const IncomeSchema = new Schema({
//    author: ObjectId,
    incomeRegistDate : String,
    incomePrice : String,
    incomeRegistFlg : Number
});

module.exports = mongoose.model('income', IncomeSchema);