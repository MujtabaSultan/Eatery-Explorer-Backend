const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  // email: { type: String, required: true, unique: true },

  hashedPassword: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: false,
  },
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword;
  },
});

module.exports = mongoose.model("User", userSchema);
