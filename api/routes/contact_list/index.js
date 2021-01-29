const {
  get_all_contactList,
  get_one_contactList,
  post_contactList,
  put_contactList,
  delete_all_contactList,
  delete_one_contactList
} = require("./controllers");

module.exports.run = (app) => {
  app.get('/api/v1/get_all_contactList/', get_all_contactList)
  app.get('/api/v1/get_one_contactList/:id', get_one_contactList)
  app.post('/api/v1/post_contactList/', post_contactList)
  app.put('/api/v1/put_contactList/:id', put_contactList)
  app.delete('/api/v1/delete_all_contactList/', delete_all_contactList)
  app.delete('/api/v1/delete_one_contactList/:id', delete_one_contactList)
}