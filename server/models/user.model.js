const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["customer", "admin"],
    },
    fav: { type: [Schema.Types.ObjectId], rel: "product" },
    name: {
      type: String,
    },
    lastname: {
      type: String,
    },
    city: {
      type: String,
    },
    postal_code: {
      type: Number,
    },
    street: {
      type: String,
    },
    num: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
