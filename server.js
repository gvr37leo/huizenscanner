const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
process.env
const app = express();
const port = process.env.PORT || 8000;
const url = process.env.MONGODB_HOST || 'mongodb://localhost:27017/';

app.use(express.static(path.join(__dirname, 'public')));

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err){
        console.log(err)
    }
    console.log('connected to mongo')

    var db = client.db('mydb')
    var collection = db.collection('mycollection')
    collection.find({}).toArray((err,res) => {
        console.log(result)
    })
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




