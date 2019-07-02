const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    // after its in the DB (Which is working) grab all this information
    // and post it on the other page
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // creating it in the DB
    console.log("Createing...");
    db.Book
      .create(req.body)
      .then(dbModel => {
        console.log("*Created*")
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    // when someone clicks the delete button, remove it
    db.Book
      console.log("Deleting....")
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};