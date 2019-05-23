const controller = require('../controllers/users.controller');

module.exports = (router) => {
  router.route('/users')
    .post(controller.addUser);
}