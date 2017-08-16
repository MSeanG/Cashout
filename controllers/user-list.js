const express = require("express");

const User = require('../models/user');
const UserList = require("../models/user-list");
const router = express.Router();

router.get("/", (req,res) => {
  const grabUserByName = new User();
  grabUserByName.user_name = grabUserByName;
  grabUserByName.find().then(users => {
    res.json(users);
  })
});

//router.get("/", (req, res) => {
//  UserList.find().then((user_list) => {
//    res.json(user_list);
//  });
//});
//
//
//
//router.post("/", (req, res) => {
//  const grabUser = User();
//  console.log(req.body);
//  grabUser.user_name = req.body.user_list.name;
//
//  newCategory.save().then((category) => {
//    res.json(category);
//  }).catch(err => console.log(err));
//})

module.exports = router;