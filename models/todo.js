var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    name: String,
    completed: Boolean,
    username: String,
    note: String,
    updated_at: {type:Date, default: Date.now}
}, {
    collection: 'todos'
});

module.exports = mongoose.model('Todo', TodoSchema);