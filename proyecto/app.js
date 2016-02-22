var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos");

var userSchemaJSON = {
  email: String,
  password: String,
};

var user_schema = new Schema(userSchemaJSON);

var User = mongoose.model("User",user_schema);

app.set("view engine","jade");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.render("index");
});

app.get("/login",function(req,res){
  User.find(function(err,doc){
    console.log(User);
  });
  res.render("login");
});

app.post("/user",function(req,res){
  var user = new User({email: req.body.email, password: req.body.password})

  user.save(function(){
    res.send("Datos recibidos");
  });

});

app.listen(8080);