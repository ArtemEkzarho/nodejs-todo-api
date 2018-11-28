const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    } 

    var db = client.db('TodoApp');

    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bfc0389bdc6bb9bcc085ac4')
    }, {
        $set: {
            name: 'Artem'
        },
        $inc: { 
            age: 1 
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    // client.close();
});