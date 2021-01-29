const {
  get_all_users,
  get_one_user,
  login_user,
  post_user,
  put_user,
  delete_all_users,
  delete_one_user
} = require("./controllers");

module.exports.run = (app) => {

  app.get('/api/v1/get_all_users/', get_all_users)
  app.get('/api/v1/get_one_user/:id', get_one_user)
  app.post('/api/v1/login_user/', login_user)
  app.post('/api/v1/post_user/', post_user)
  app.put('/api/v1/put_user/:id', put_user)
  app.delete('/api/v1/delete_all_users/', delete_all_users)
  app.delete('/api/v1/delete_one_user/:id', delete_one_user)
}