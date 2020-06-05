const MongooseErrHandler = require("../helpers/MongooseErrHandler");
const PortfolioModel = require("../models/PortfolioModel");
const UserModel = require("../models/UserModel");
exports.getPortfolios = function(req, res) {
 

  PortfolioModel.find({})
  .sort([['createdAt','desc']])
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
              title: "No Rentals Found!",
              detail: `لا يوجد نتائج لمدينة  ${city}`
            }
          ]
        });
      }
      res.json(foundedElements);
    });
};