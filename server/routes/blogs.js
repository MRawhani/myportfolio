const express = require("express");
const router = express.Router();

const Blog = require('../controllers/BlogController')

router.get("/getBlogs", Blog.getBlogs );
router.get("/getBlogById/:id", Blog.getBlogById );


module.exports = router;
  