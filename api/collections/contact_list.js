const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactListSchema = new Schema({
    name: { type: String, required: true, unique: true, dropDups: true },
    email: { type: String, required: true, unique: true, dropDups: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true},
});
module.exports = mongoose.model("Contactlist", ContactListSchema);