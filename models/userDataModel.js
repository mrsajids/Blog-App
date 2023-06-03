const mongoose = require('mongoose');
const userDataSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      age: {
        type: Number
      },
    }
  );

  //Create Model
  const newUser = mongoose.model("NewUser", userDataSchema);
  module.exports = newUser;