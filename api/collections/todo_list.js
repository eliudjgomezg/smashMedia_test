const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
//const Collection = require("./Collection_to_relacionate")

const TodoListSchema = new Schema({
    assignedTo: { type: String, required: true },
    createdAt: { type: String, required: true },
    task: { type: String, required: true },
    completed: {type: Boolean, default: false}
});
module.exports = mongoose.model("TodoList", TodoListSchema);