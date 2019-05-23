const mongoose = require('mongoose')
const User = require('../models/users.model')
const bcrypt = require('bcrypt')


exports.addUser = (req, res) => {
    let result = {}
    let status = 201
    const name = req.body.name
    const password = req.body.password
    const email = req.body.email

    const user = new User({ name: name, password: password, email: email, role: 'user' }); // document = instance of a model
    // TODO: We can hash the password here before we insert instead of in the model
    user.save((err, user) => {
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

exports.userLogin = (req, res) => {
    const { name, password } = req.body;
    let result = {};
    let status = 200;

    User.findOne({name}, (err, user) => {
        if (!err && user) {
          // We could compare passwords in our model instead of below
          bcrypt.compare(password, user.password).then(match => {
            if (match) {
              result.status = status;
              result.result = user;
            } else {
              status = 401;
              result.status = status;
              result.error = 'Authentication error';
            }
            res.status(status).send(result);
          }).catch(err => {
            status = 500;
            result.status = status;
            result.error = err;
            res.status(status).send(result);
          });
        } else {
          status = 404;
          result.status = status;
          result.error = err;
          res.status(status).send(result);
        }
    })

}