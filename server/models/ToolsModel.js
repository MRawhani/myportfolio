const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToolSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: [128, "Too long, max is 128 characters"]
  },
 

  image: { type: String, required: true },
  
  percentage: { type: String, required: true },
  color: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ToolModel", ToolSchema);
