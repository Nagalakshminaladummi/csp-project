const express = require("express");
const btech = require("../Database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insert", (req, res) => {
  let Details = req.body;
  console.log(Details);
  btech.btech("btech", "Insert", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.delete("/Delete:coursename", (req, res) => {
  let Details = req.params.username;
  btech.btech("btech", "Delete", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Update:coursename", (req, res) => {
  let Details = req.params.username;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  btech.btech("btech", "Update", Details, UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Read:coursename", (req, res) => {
  const Details = req.params.coursename;
  console.log(Details);
  btech.btech("btech", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = Router;