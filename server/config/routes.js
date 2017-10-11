var tasks = require('../controllers/tasks.js')

module.exports = function(app) {
    // Routes
    // Retrieve all Tasks
    app.get('/tasks', function(req, res) {
        tasks.showAll(req, res)
    })
    // Retrieve a Task by ID
    app.get('/tasks/:id', function(req, res) {
        tasks.showTask(req, res)
    })
    // Create a Task
    app.post('/tasks', function(req, res) {
        tasks.newTask(req, res)
    })
    // Update a Task by ID
    app.put('/tasks/:id', function(req, res) {
        tasks.updateTask(req, res)
    })
    // Delete a Task by ID
    app.delete('/tasks/:id/', function(req, res) {
        tasks.deleteTask(req, res)
    })
}

