var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title:  { type: String, required: true},
    description:  { type: String, default: ""},
    completed:  { type: Boolean, default: false},
}, {timestamps: true });

mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task')

// Use native promises
mongoose.Promise = global.Promise;