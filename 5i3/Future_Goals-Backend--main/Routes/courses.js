const express = require("express");
const courses = require("../Database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insert", (req, res) => {
  let Details = req.body;
  console.log(Details);
  courses.courses("courses", "Insert", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.delete("/Delete:course_name", (req, res) => {
  let Details = req.params.course_name;
  courses.courses("courses", "Delete", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Update:course_name", (req, res) => {
  let Details = req.params.course_name;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  courses.courses("courses", "Update", Details, UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Read:course_name", (req, res) => {
  const Details = req.params.course_name;
  courses.courses("courses", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = Router;






