const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const LoginSchema = new Schema({
//    author: ObjectId,
    loginId : String,
    password : String
});
module.exports = mongoose.model('login', LoginSchema);