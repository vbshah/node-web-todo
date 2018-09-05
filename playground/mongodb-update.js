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
    // db.collection('Users').findOneAndDelete({name: 'John Doe'}).then((results) => {
    //     console.log(results);
    // }, (err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    // });
    db.collection('Users').findOneAndUpdate({
        name: 'Monica Galler'
    }, {
        $set: {
            name: 'Monica Bing'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((restuls) => {
        console.log(JSON.stringify(restuls, undefined, 2));
    });
    client.close();
});