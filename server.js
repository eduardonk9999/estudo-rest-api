const express = require('express');
const app = express();
const data = require("./data.json");

app.use(express.json());

app.get("/clients/:id", function(req, res){
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);
});
app.get("/clients", function(req, res){
  res.json(data)
});
app.post("/clients/:id", function(req, res){

});
app.put("/clients/:id", function(req, res){

});
app.delete("/clients/:id", function(req, res){

});

app.listen('3000', function(){
  console.log('Opá');
});