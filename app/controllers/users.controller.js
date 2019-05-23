const mongoose = require('mongoose')
const User = require('../models/users.model')


exports.addUser = (req, res) => {
    let result = {}
    let status = 201
    const name = req.body.name
    const password = req.body.password
    const email = req.body.email

    const user = new User({ name: name, password: password, email: email, role: 'user' }); // document = instance of a model
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