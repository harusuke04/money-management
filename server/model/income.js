const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const IncomeSchema = new Schema({
//    author: ObjectId,
    date : String,
    income : String,
    flg : Number
});

module.exports = mongoose.model('income', IncomeSchema);