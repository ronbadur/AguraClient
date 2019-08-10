const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  admin: { type: Boolean, require: true },
  items: []
});

const usersList = module.exports = mongoose.model("user", userSchema);


module.exports.getAllUsers = (callback) => usersList.find().exec(callback);

module.exports.getUserByMailAndPassword = (mail, password, callback) => {
  let query = { mail: mail, password: password };
  return (usersList.findOne(query).exec(callback));
}

module.exports.getUserByID = (id, callback) => {
  let query = { _id: id };
  return (usersList.findOne(query).exec(callback));
}

module.exports.editUser = (editedUser, callback) => usersList.findOneAndUpdate({ mail: editedUser.mail }, editedUser, {upsert: true, new: true, runValidators: true}, callback);

module.exports.addUser = (newUser, callback) => newUser.save(callback);
