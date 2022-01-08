const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const BudgetSchema = new Schema({
//    author: ObjectId,
    budgetName : String,
    price : Number,
    date : Date
});

module.exports = mongoose.model('budget', BudgetSchema);