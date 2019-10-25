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

// todoRoutes.route('/:id').get(function(req, res) {
//     let id = req.params.id;
//     Todo.findById(id, function(err, todo) {
//         res.json(todo);
//     });
// });

// todoRoutes.route('/update/:id').post(function(req, res) {
//     Todo.findById(req.params.id, function(err, todo) {
//         if (!todo)
//             res.status(404).send("data is not found");
//         else
//             todo.todo_description = req.body.todo_description;
//             todo.todo_responsible = req.body.todo_responsible;
//             todo.todo_priority = req.body.todo_priority;
//             todo.todo_completed = req.body.todo_completed;

//             todo.save().then(todo => {
//                 res.json('Todo updated!');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });

// todoRoutes.route('/add').post(function(req, res) {
//     let todo = new Todo(req.body);
//     todo.save()
//         .then(todo => {
//             res.status(200).json({'todo': 'todo added successfully'});
//         })
//         .catch(err => {
//             res.status(400).send('adding new todo failed');
//         });
// });

app.use('/ratemyadministrator', todoSurvey);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});