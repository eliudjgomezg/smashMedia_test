const todolist_route = require("./todo_list")
const contaclist_route = require("./contact_list")
const users_route = require("./users")

module.exports.run = (app) => {
  todolist_route.run(app)
  contaclist_route.run(app)
  users_route.run(app)
}   