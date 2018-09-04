// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err, client) => {
    if (err) {
        return console.log(`Cannot connect to server ${err}`);
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');    
    db.collection('Todos').find({
        _id: new ObjectID('5b8dec9f5400677cf1ced241') 
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        if (err) {
            console.log(err);
        }
    });

    db.collection('Users').count().then((cnt) => {
        console.log(`Total number of documents are ${cnt}`);
    }, (err) => {
        console.log(`There is an error ${err}`);
    });

    db.collection('Users').find({name: 'Vaibhav Shah'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });


    client.close();
});