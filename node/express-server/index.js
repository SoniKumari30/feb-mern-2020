const express = require('express')
const mongoose = require('mongoose') // npm install mongoose
const app = express()
// configuration - enable express to parse incoming json data 
app.use(express.json())
const port = 3055

app.use(function(req, res, next) {
    console.log(`${req.method} - ${req.url} - ${req.ip} - ${new Date()}`)
    next()
})

// establish connection to database
mongoose.connect('mongodb://localhost:27017/feb2020')
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log('error connecting to db', err)
    })

// create a task schema 
const Schema = mongoose.Schema
const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'task should have a title']
    },
    description: {
        type: String
    },
    completed: {
        type: Boolean
    },
    dueDate: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// create a model
const Task = mongoose.model('Task', taskSchema)

app.get('/', (req, res) => {
    res.send('Welcome to the website')
})

app.get('/api/error', (req, res) => {
    throw new Error('not authorized')
})

// tasks api 
app.get('/api/tasks', (req, res) => {
    Task.find()
        .then((tasks) => {
            res.json(tasks)
        })
        .catch((err) => {
            res.json(err)
        })
})

app.post('/api/tasks', (req, res) => {
    const body = req.body
    const task = new Task(body)
    task.save()
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })
})

app.get('/api/tasks/:id', (req, res) => {
    const id = req.params.id 
    Task.findById(id)
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })
})

app.put('/api/tasks/:id', (req, res) => {
    const id = req.params.id 
    const body = req.body 
    Task.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })
})

app.delete('/api/tasks/:id', (req, res) => {
    const id = req.params.id 
    Task.findByIdAndUpdate(id)
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })
})

// error handling 
app.use(function(err, req, res, next){
    console.log('error handling middleware function')
    res.send(err.message)
})

app.listen(port, () => {
    console.log('server is running on port', port)
})