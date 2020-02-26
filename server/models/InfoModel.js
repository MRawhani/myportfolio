const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
  hero: {
    type: String,
    required: true,
    
  },
  aboutSub: { type: String },
  aboutContent: { type: String, required:true },

  blogContent: { type: String, required: true },
  urls:{ type: Array, required: true }
});

module.exports = mongoose.model("InfoModel", InfoSchema);
