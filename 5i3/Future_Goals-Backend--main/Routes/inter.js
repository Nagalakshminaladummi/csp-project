const express = require("express");
const inter = require("../Database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insert", (req, res) => {
  let Details = req.body;
  console.log(Details);
  inter.inter("inter", "Insert", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.delete("/Delete:coursename", (req, res) => {
  let Details = req.params.coursename;
  inter.inter("inter", "Delete", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Update:coursename", (req, res) => {
  let Details = req.params.coursename;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  inter.inter("inter", "Update", Details, UpdatedDetails)
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
  inter.inter("inter", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = Router;






