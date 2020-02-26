const express = require("express");
const router = express.Router();

const Tool = require('../controllers/ToolsController')

router.get("/getTools", Tool.getTools);


module.exports = router;
  