const TodoList = require("../../collections/todo_list")

const get_all_TodoList = async (req, res) => {
  try {
    const list = await TodoList.find({});
    const resp = {
      status: 'success',
      tasks: list
    }
    res.send(resp);
  } catch (error) {
    const resp = {
      status: 'error',
      message: error,
    }
    res.send(resp);
  }
};

const get_one_TodoList = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await TodoList.findOne({ _id: id });
    const resp = {
      status: 'success',
      task: item
    }
    res.send(resp);
  } catch (error) {
    const resp = {
      status: 'error',
      message: error,
    }
    res.send(resp);
  }
};

const post_TodoList = async (req, res) => {
  try {
    const body = req.body;

    const newItem = await TodoList.create(body);
    const resp = {
      status: 'success',
      task: newItem
    }
    res.send(resp);
  } catch (error) {
    const resp = {
      status: 'error',
      message: error,
    }
    res.send(resp);
  }
};

const put_TodoList = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const itemEdited = await TodoList.findByIdAndUpdate({ _id: id }, { $set: body }, { new: true });
    const resp = {
      status: 'success',
      task: itemEdited
    }
    res.send(resp);
  } catch (error) {
    const resp = {
      status: 'error',
      message: error,
    }
    res.send(resp);
  }
};

const delete_all_TodoList = async (req, res) => {
  try {
    await TodoList.deleteMany({});
    const resp = {
      status: 'success'
    }
    res.send(resp);
  } catch (error) {
    const resp = {
      status: 'error',
      message: error,
    }
    res.send(resp);
  }
};

const delete_one_TodoList = async (req, res) => {
  try {
    const id = req.params.id

    await TodoList.findByIdAndDelete({ _id: id });
    const resp = {
      status: 'success'
    }
    res.send(resp);
  } catch (error) {
    const resp = {
      status: 'error',
      message: error,
    }
    res.send(resp);
  }
};

module.exports = {
  get_all_TodoList,
  get_one_TodoList,
  post_TodoList,
  put_TodoList,
  delete_all_TodoList,
  delete_one_TodoList
};