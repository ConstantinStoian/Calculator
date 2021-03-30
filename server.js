const express = require("express");
const bodyParser = require("body-Parser");
const app = express();
const port = 3000

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {

  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator.html", function(req, res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var result = height / weight;
  var result = Math.floor();
  res.send("The result of your BMI index is....."+ result);
});

app.listen(3000, function() {

  console.log("Server is running on port 3000");
});
