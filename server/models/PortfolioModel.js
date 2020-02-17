const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: [128, "Too long, max is 128 characters"]
  },
  type: { type: String, required: true, lowercase: true },
  tools: {
    type: Array,
    required: true
  },

  image: { type: String, required: true },

  description: { type: String, required: true },
  link: { type: String, required: true },
  note: { type: String },
  features: { type: Array },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("PortfolioModel", portfolioSchema);
