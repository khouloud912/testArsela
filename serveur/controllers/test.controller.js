const Tester =require("../models/test.model");
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

exports.AddFields=(req,res,next)=>{
    
      const fieldstest = new Tester({
            _id: new mongoose.Types.ObjectId(),
            title:req.body.title,
            description:req.body.description
          });
          console.log(fieldstest);
          fieldstest.save()
            .then(result => {
              res.status(201).json({
                message: "fields created"
              });
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
              });
            });
      
}

exports.getFields=(req,res,next)=>{
      
      Tester.find()
    .exec()
    .then(fields => {
      res.status(200).json({
        fields})})
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
    
    }