const Calls = require("../models/calls.model");

//Creating a new Calls
module.exports.createCalls = (req, res) => {
  Calls.create(req.body)
    .then((newCalls) => {
      res.json({ newCalls });
      console.log(res.body);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Getting all activities
module.exports.getAllCalls = (req, res) => {
  Calls.find()
    .then((allCalls) => {
      res.json(allCalls);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Getting one Calls
module.exports.getOneCalls = (req, res) => {
  Calls.findOne({ _id: req.params.id })
    .then((queriedCalls) => {
      res.json(queriedCalls);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Updating an Calls
module.exports.updateCalls = (req, res) => {
  Calls.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedCalls) => {
      res.json({ updatedCalls });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Deleting an Calls
module.exports.deleteCalls = (req, res) => {
  Calls.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
      res.json({ deletedResponse });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}