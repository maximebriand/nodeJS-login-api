const mongoose = require('mongoose')
const User = require('../models/users.model')


exports.addUser = (req, res) => {
    let result = {};
    let status = 201;
    const { name, password } = req.body;
    const user = new User({ name, password }); // document = instance of a model
    // TODO: We can hash the password here before we insert instead of in the model
    user.save((err, user) => {
        console.log('err')
        console.log(err)
        if (!err) {
            result.status = status;
            result.result = user;
        } else {
            status = 500;
            result.status = status;
            result.error = err;
        }
        res.status(status).send(result);
    });
   
}


  
// exports.listAllTasks = (req, res) => {
//     Task.find({}, (err, task) => {
//         if (err) {
//         res.status(500).send(err);
//         }
//         res.status(200).json(task);
//     });
// };

// exports.createNewTask = (req, res) => {
// let newTask = new Task(req.body);
// newTask.save((err, task) => {
//     if (err) {
//     res.status(500).send(err);
//     }
//     res.status(201).json(task);
// });
// };

// exports.readTask = (req, body) => {
// Task.findById(req.params.taskid, (err, task) => {
//     if (err) {
//     res.status(500).send(err);
//     }
//     res.status(200).json(task);
// });
// };

// exports.updateTask = (req, res) => {
// Task.findOneAndUpdate(
//     { _id: req.params.taskid },
//     req.body,
//     { new: true },
//     (err, task) => {
//     if (err) {
//         res.status(500).send(err);
//     }
//     res.status(200).json(task);
//     }
// );
// };

// exports.deleteTask = (req, res) => {
// Task.remove({ _id: req.params.taskid }, (err, task) => {
//     if (err) {
//     res.status(404).send(err);
//     }
//     res.status(200).json({ message: "Task successfully deleted" });
// });
// };