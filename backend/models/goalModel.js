const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
); // you could also add unique inside text for example

module.exports = mongoose.model("Goal", goalSchema);
