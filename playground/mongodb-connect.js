// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err, client) => {
    if (err) {
        return console.log(err);
    }
    console.log('Connected to mongodb server');
    // const db = client.db('TodoApp');    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err, result) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // const db = client.db('TodoApp');    
    // db.collection('Users').insertOne({
    //     name: 'Vaibhav Shah',
    //     age: 20,
    //     location: 'Rochester'
    // },(err, result) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(`Time of current record ${result.ops[0]._id.getTimestamp()}`);
    // });


    client.close();
});