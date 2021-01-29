const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true},
});
module.exports = mongoose.model("Users", UsersSchema);