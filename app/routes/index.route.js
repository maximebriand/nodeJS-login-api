const users = require('./users.route');

module.exports = (router) => {
  users(router);
  return router;
}