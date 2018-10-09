const mongoose = require("mongoose");
const { Schema } = mongoose;

// collection
const userSchema = new Schema({
  googleId: String
});

// class
mongoose.model("users", userSchema);
