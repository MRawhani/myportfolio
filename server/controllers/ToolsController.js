const MongooseErrHandler = require("../helpers/MongooseErrHandler");
const ToolsModel = require("../models/ToolsModel");

exports.getTools = function(req, res) {
 

  ToolsModel.find({})
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
              title: "No Tools Found!",
              detail: `No Tools Found!`
            }
          ]
        });
      }
      res.json(foundedElements);
    });
};