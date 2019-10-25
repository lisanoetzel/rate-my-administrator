var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let ratemyadministrator = new Schema({
    // todo_description: {
    //     type: String
    // },
    // todo_responsible: {
    //     type: String
    // },
    // todo_priority: {
    //     type: String
    // },
    // todo_completed: {
    //     type: Boolean
    // }
});

module.exports = mongoose.model('ratemyadministrator', ratemyadministrator);