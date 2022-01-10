const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const BudgetSchema = new Schema({
//    author: ObjectId,
    date : String,
    budgetName : String,
    price : Number
});
module.exports = mongoose.model('budget', BudgetSchema);