const Contactlist = require("../../collections/contact_list")

const get_all_contactList = async (req, res) => {
  try {
    const list = await Contactlist.find({});
    const resp = {
      status: 'success',
      contact: list
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

const get_one_contactList = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Contactlist.findOne({ _id: id });
    const resp = {
      status: 'success',
      contact: item
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

const post_contactList = async (req, res) => {
  try {
    const body = req.body;

    const newItem = await Contactlist.create(body);
    const resp = {
      status: 'success',
      contact: newItem
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

const put_contactList = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const itemEdited = await Contactlist.findByIdAndUpdate({ _id: id }, { $set: body }, { new: true });
    const resp = {
      status: 'success',
      contact: itemEdited
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

const delete_all_contactList = async (req, res) => {
  try {
    await Contactlist.deleteMany({});
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

const delete_one_contactList = async (req, res) => {
  try {
    const id = req.params.id

    await Contactlist.findByIdAndDelete({ _id: id });
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
  get_all_contactList,
  get_one_contactList,
  post_contactList,
  put_contactList,
  delete_all_contactList,
  delete_one_contactList
};