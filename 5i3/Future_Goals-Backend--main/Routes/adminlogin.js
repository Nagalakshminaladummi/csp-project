const express = require("express");
const adminlogin = require("../Database");
// const Mapping = require("./Operations");
const Router = express.Router();


Router.get("/Read:mail", (req, res) => {
  const Details = req.params.mail;
  console.log(Details);
 adminlogin.adminlogin("register", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = Router;