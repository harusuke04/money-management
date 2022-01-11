const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const BudgetSchema = new Schema({
//    author: ObjectId,
    budgetRegistDate : String,
    budgetName : String,
    budgetPrice : String
});
module.exports = mongoose.model('budget', BudgetSchema);