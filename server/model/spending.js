const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const SpendingSchema = new Schema({
//    author: ObjectId,
    spendingRegistDate : String,
    spendingName : String,
    spendingPrice : String
});
module.exports = mongoose.model('spending', SpendingSchema);