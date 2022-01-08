const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const IncomeSchema = new Schema({
//    author: ObjectId,
    income : String,
    flg : Number,
    date : Date
});

module.exports = mongoose.model('income', IncomeSchema);