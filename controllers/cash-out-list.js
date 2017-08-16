const express = require("express");
//const Category = require("../models/category");
//const Question = require("../models/question");
const CashOutList = require("../models/cash-out-list");
const CashOutForm = require("../models/cash-out-form");
const router = express.Router();

//router.get("/", (req, res) => {
//  Category.find().then((categories) => {
//    res.json(categories);
//  });
//});

router.get("/", (req, res) => {
  CashOutList.find().then((lists) => {
    res.json(lists);
  });
});

//router.post("/", (req, res) => {
//  const newCategory = new Category();
//  console.log(req.body);
//  newCategory.name = req.body.category.name;
//  
//  const newQuestions = req.body.category.questions.map((question) => {
//    return new Question(question);
//  });
//
//  newCategory.questions = newQuestions;
//
//  newCategory.save().then((category) => {
//    res.json(category);
//  }).catch(err => console.log(err));
//})

router.post("/", (req, res) => {
  const newCategory = new Category();
  console.log(req.body);
  newCategory.name = req.body.category.name;
  
  const newQuestions = req.body.category.questions.map((question) => {
    return new Question(question);
  });

  newCategory.questions = newQuestions;

  newCategory.save().then((category) => {
    res.json(category);
  }).catch(err => console.log(err));
})

module.exports = router;