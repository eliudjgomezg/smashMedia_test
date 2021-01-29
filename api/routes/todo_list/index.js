const {
  get_all_TodoList,
  get_one_TodoList,
  post_TodoList,
  put_TodoList,
  delete_all_TodoList,
  delete_one_TodoList
} = require("./controllers");

module.exports.run = (app) => {
  app.get('/api/v1/get_all_todoList/', get_all_TodoList)
  app.get('/api/v1/get_one_todoList/:id', get_one_TodoList)
  app.post('/api/v1/post_todoList/', post_TodoList)
  app.put('/api/v1/put_todoList/:id', put_TodoList)
  app.delete('/api/v1/delete_all_todoList/', delete_all_TodoList)
  app.delete('/api/v1/delete_one_todoList/:id', delete_one_TodoList)
}