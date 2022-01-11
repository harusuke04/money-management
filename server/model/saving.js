const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const SavingSchema = new Schema({
//    author: ObjectId,
    savingRegistDate : String,
    savingName : String,
    savingPrice : String
});
module.exports = mongoose.model('saving', SavingSchema);