var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let ratemyadministrator = new Schema({
    adminName: {
        type: String
    },
    adminTitle: {
        type: String
    },
    adminInstitution: {
        type: String
    },
    acadTerm: {
        type: String
    },
    submitted: {
        type: Boolean
    }
});

module.exports = mongoose.model('ratemyadministrator', ratemyadministrator);