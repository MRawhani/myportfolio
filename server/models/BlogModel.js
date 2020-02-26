const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: [128, "Too long, max is 128 characters"]
  },
  slug: { type: String },
  subContent: { type: String, required:true },

  image: { type: String, required: true },
  ownerId: { type: mongoose.Types.ObjectId, ref: "UserModel" },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("BlogModel", BlogSchema);
