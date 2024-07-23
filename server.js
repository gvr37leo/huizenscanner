const express = require('express');
const path = require('path');
const mongodb = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8000;
const mongourl = process.env.MONGODB_HOST || 'mongodb://localhost:27017/';
console.log('ENV variables',process.env)

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let client = new mongodb.MongoClient(mongourl);



start().then(() => {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });

})

async function start(){
    try{
        console.log(`trying to connect to mongo with ${mongourl}}`)
        await client.connect()
        console.log('connected to mongo')
        let db = client.db('mydb')
    
        app.get('/api/:collection/:id',async (req,res) => {
            let collection = db.collection(req.params.collection)
            let result = await collection.findOne({_id:req.params.id})
            res.status(200).send(result)
        })
        
        app.get('/api/:collection',async (req,res) => {
            let collection = db.collection(req.params.collection)
            let result = await collection.find().toArray()
            res.status(200).send(result)
        })
        
        app.post('/api/:collection',async (req,res) => {
            let collection = db.collection(req.params.collection)

            let result = await collection.insertOne(req.body)
            res.status(200).send(result)
        })
        
        app.put('/api/:collection/:id',async (req,res) => {
            let collection = db.collection(req.params.collection)
            let result = await collection.updateOne({id:new MongoClient.ObjectID(req.body._id)},{$set:req.body})
            res.status(200).send(result)
        })
        
        app.delete('/api/:collection/:id',async (req,res) => {
            let collection = db.collection(req.params.collection)
            let result = await collection.deleteOne({id:new MongoClient.ObjectID(req.params.id)})
            res.status(200).send(result)
        })

    }catch(e){
        console.log(e)
    }

}




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




