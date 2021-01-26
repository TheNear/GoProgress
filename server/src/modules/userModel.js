const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: "groups",
    },
    password: {
      type: String,
      required: true,
    },
    emailVerify: {
      type: Boolean,
      required: true,
      default: false
    }
  }
)

module.exports = model("users", userSchema);