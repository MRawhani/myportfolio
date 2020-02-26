const MongooseErrHandler = require("../helpers/MongooseErrHandler");
const BlogModel = require("../models/BlogModel");

exports.getBlogs = function(req, res) {
 
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;
  BlogModel.find({}).populate('ownerId').limit(limit)
    .exec(function(err, foundedElements) {
      if (err) {
        return res
          .status(422)
          .send({ errors: MongooseErrHandler.normalizeErrors(err.errors) });
      }
      if ( foundedElements.length === 0) {
        return res.status(422).send({
          errors: [
            {
              title: "No blogs Found!",
              detail: `No blogs available`
            }
          ]
        });
      }
      res.json(foundedElements);
    });
};

exports.getBlogById = function(req, res) {
    const bloglId = req.params.id;
  
    BlogModel.findById(bloglId)
      .populate("ownerId")
      .exec(function(err, foundBlog) {
        if (err) {
          return res.status(422).send({
            errrs: [
              { title: "Blog Error", description: "There is somthing wrong" }
            ]
          });
        }
        return res.json(foundBlog);
      });
  };
  