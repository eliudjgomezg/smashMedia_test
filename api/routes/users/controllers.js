const Users = require("../../collections/users")

const get_all_users = async (req, res) => {
  try {
    const list = await Users.find({});
    const resp = {
      status: 'success',
      users: list
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

const get_one_user = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Users.findOne({ _id: id });
    const resp = {
      status: 'success',
      user: item
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

const login_user = async (req, res) => {
  try {
    const user = req.body
    const userToLogin = await Users.findOne({ email: user.email });
    if (userToLogin.password === user.password) {
      const resp = {
        status: 'success',
        user: Object.assign(userToLogin, { password: '****' }),
      }
      res.send(resp)
    } else {
      const resp = {
        status: 'error 404',
        message: 'user_not_found',
      }
      res.send(resp)
    }
  } catch (error) {
    const resp = {
      status: 'error',
      message: error,
    }
    res.send(resp);
  }
};

const post_user = async (req, res) => {
  try {
    const body = req.body;

    const newItem = await Users.create(body);
    const resp = {
      status: 'success',
      user: newItem
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

const put_user = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const itemEdited = await Users.findByIdAndUpdate({ _id: id }, { $set: body }, { new: true });
    const resp = {
      status: 'success',
      user: itemEdited
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

const delete_all_users = async (req, res) => {
  try {
    await Users.deleteMany({});
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

const delete_one_user = async (req, res) => {
  try {
    const id = req.params.id

    await Users.findByIdAndDelete({ _id: id });
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
  get_all_users,
  get_one_user,
  login_user,
  post_user,
  put_user,
  delete_all_users,
  delete_one_user
};