const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    } 

    var db = client.db('TodoApp');

    console.log('Connected to MongoDB server');

    client.close();
});