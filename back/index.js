// Path module
const path = require('path');
//Express
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
const bgRouter = express.Router();
const port =  process.env.PORT|| 3000;


//Mongo config
const MongoClient = require('mongodb').MongoClient;                                                                                                                                      
app.use(express.urlencoded());
app.use(express.json());
mongoose.connect = "mongodb+srv://admin:admin@cluster0.ahsgc.mongodb.net/Web2-Course-project?retryWrites=true&w=majority";
const DB_NAME = "Web2-Course-project";
const client = new MongoClient(mongoose.connect, {useNewUrlParser: true});


app.use('/api',bgRouter);

//Router for Seen
bgRouter.route('/seen')
.get((req,res)=> {
  collection = db.collection("movies");
  collection.find({}).toArray((error, result)=>{
    if(error) {
      return res.status(500).send(error);
    }
    res.json(result);
  });
})
.post((req,res) => {
  collection = db.collection("movies");
  collection.insertOne(req.body),{unique: true}.then(result => {
    console.log(result);
  });
  res.send('Somthing');
})
.delete((req,res) => {
  collection = db.collection("movies");
  collection.remove(req.body).then(result => {
    console.log(result);
  });
  res.send('Somthing')

});


//Router for NotSeen
bgRouter.route('/notSeen')
.get((req,res)=> {
  collection = db.collection("notSeen");
  collection.find({}).toArray((error, result)=>{
    if(error) {
      return res.status(500).send(error);
    }
    res.json(result);
  });
})
.post((req,res) => {
  collection = db.collection("notSeen");
  collection.insertOne(req.body),{unique: true}.then(result => {
    console.log(result);
  });
  res.send('Somthing');
});

//Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  client.connect(err => {
    if(err) {
      throw err;
    }
    db = client.db(DB_NAME);
    console.log(`Connected to ${DB_NAME}!`);
  });
  
});