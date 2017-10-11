var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    showAll: function(req, res) {
        Task.find({}, function(err, tasks) {
            if(err) {
                console.log("didn't get task data");
                res.send('did not work');
            } else {
                console.log("got task data");
                res.json(tasks);
            }
        })
    },
    showTask: function(req, res) {
        console.log("task id-----"+"ObjectId('"+req.params.id+"')")
        // Fish.find({_id:"ObjectId('"+req.params.id+"')"}, function(err, fishies) {
        Task.findOne({_id: req.params.id}, function(err, task) {
            if(err) {
                console.log("didn't get task data");
                res.send('can not show task');
            } else {
                console.log("got task data", task);
                res.json(task);
            }
        })
    },
    newTask: function(req, res) {
        console.log("name from URL", req.body);
        Task.create(req.body, function(err, task) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('something went wrong saving user');
                console.log(err.errors);
                res.send({errors: task.errors});
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a TAsk!', task);
                res.send('added a task!'+task);
            }
        })
    },
    updateTask: function(req, res) {
        console.log("POST DATA-----", req.body);
        console.log("ID", req.params.id);
        // Fish.findOne({_id:req.params.id}, function(err, fishy) {
        //     fishy.name = req.body.name;
        //     fishy.length = req.body.length;
        //     fishy.save(function(err){
        //         if(err) {
        //             console.log('something went wrong saving user');
        //             console.log(fishy.errors);
        //             res.render('/', {errors: fishy.errors});
        //         } else { // else console.log that we did well and then redirect to the root route
        //             console.log('successfully updated a fish!');
        //             res.redirect('/');
        //         }
        //     })    
        // })
    // try another way with update method instead:
        Task.update({_id:req.params.id}, req.body, function(err, task) {
            if(err) {
                console.log('something went wrong saving task');
                console.log(err.errors);
                res.send(err.errors);
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully updated a task!');
                res.send('updated a task!'+task);
            }
        })
    },
    deleteTask: function(req, res) {
        console.log("ID", req.params.id);
        Task.remove({_id: req.params.id}, function(err) {
            if(err) {
                console.log('something went wrong deleting a task');
                console.log(err.errors);
                res.send(err.errors);
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully deleted a task!');
                res.send('deleted TAsk:'+req.params.id);
            }
        })
    }
}