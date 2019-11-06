var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var surveyRoute = express.Router();
var PORT = 4000;

let ratemyadministrator = require('./ratemyadministrator.model');

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function(){
    console.log("Server is running on Port: " + PORT);
}), 

mongoose.connect('mongodb://127.0.0.1:27017/ratemyadministrator', { useNewUrlParser: true });
var connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

surveyRoute.route('/survey').get(function(req, res) {
    ratemyadministrator.find(function(err, ratemyadministrator) {
        if (err) {
            console.log(err);
        } else {
            res.json(ratemyadministrator);
        }
    });
});

surveyRoute.route('/:id').get(function(req, res) {
    let id = req.params.id;
    ratemyadministrator.findById(id, function(err, ratemyadministrator) {
        res.json(ratemyadministrator);
    });
});

surveyRoute.route('/update/:id').post(function(req, res) {
    ratemyadministrator.findById(req.params.id, function(err, ratemyadministrator) {
        if (!ratemyadministrator)
            res.status(404).send("data is not found");
        else
            ratemyadministrator.survey_name = req.body.survey_name;
            ratemyadministrator.survey_title = req.body.survey_title;
            ratemyadministrator.survey_institution = req.body.survey_institution;
            ratemyadministrator.survey_term = req.body.survey_term;
            ratemyadministrator.survey_q1 = req.body.survey_q1;
            ratemyadministrator.survey_q2 = req.body.survey_q2;
            ratemyadministrator.survey_q3 = req.body.survey_q3;

            ratemyadministrator.save().then(ratemyadministrator => {
                res.json('ratemyadministrator updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

surveyRoute.route('/add').post(function(req, res) {
    let ratemyadministrator = new ratemyadministrator(req.body);
    ratemyadministrator.save()
        .then(ratemyadministrator => {
            res.status(200).json({'ratemyadministrator': 'ratemyadministrator added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new ratemyadministrator failed');
        });
});

app.use('/ratemyadministrator', ratemyadministrator);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});