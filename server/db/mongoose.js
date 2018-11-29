var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);       //https://stackoverflow.com/questions/51916630/mongodb-mongoose-collection-find-options-deprecation-warning
mongoose.set('useFindAndModify', false);    //https://github.com/Automattic/mongoose/issues/6880

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

module.exports = {mongoose}