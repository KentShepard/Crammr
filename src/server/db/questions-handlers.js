//Data CRUD operations
var MongoClient = require('mongodb').MongoClient;

/********DATA METHODS********/

//Using 'insert' to insert data to our collection
var insertQ = function(db, question, callback) {
  //Specify the collection where we will 'insert' in this case 'questions'
  var collection = db.collection('test-questions');
  //can use 'insertMany' to insert and array of JSON objects into collection
  collection.insert(question, function(err, result) {

    console.log('Inserted a question into Mongo collection');
    callback(result);
  });
}

//Using 'find' to return data row(s)
var findQ = function(db, questionType, callback) {
  //Specify the collection where we will 'find' in this case 'questions'

  var collection = db.collection('test-questions');
    //Find question, empty should return all
    collection.find({questionType: questionType})
    .toArray(function(err, docs) {
      console.log('Found the following records...');
      callback(docs);
    });
}

//Update data row
var updateQ = function(db, id, callback) {
  //Specify the collection where we will 'update' in this case 'questions'
  var collection = db.collection('test-questions');
  //Update selections where the first argument is the 'find' and the second argument is the 'replace'
  collection.updateOne({_id: id}, { $set: property}, function(err, result) {
    //assert.equal(err, null);
    //assert.equal(1, result.result.n);
    console.log("Updated question where _id = ", id, 'to contain', property);
    callback(result);
  })
}

//Remove data row
var removeQ = function(db, id, callback) {
  //Specify the collection where we will 'remove' in this case 'questions'
  var collection = db.collection('test-questions');
  // Delete document where a is 3
  collection.deleteOne({ _id : id }, function(err, result) {
    //assert.equal(err, null);
    //assert.equal(1, result.result.n);
    console.log("Removed a question where _id = ", id);
    callback(result);
  });
}

//Make a "hashed" index on collection
var indexQ = function(db, callback) {
  //Specify the collection where we will 'index' in this case 'questions'
  db.collection('test-questions')
  .createIndex(
  {"prompt": 1},
  null,
  function(err, results) {
    console.log("Created index on 'prompt' property");
    callback();
  }
  )
}

module.exports = {
  insertQ: insertQ,
  findQ: findQ,
  updateQ: updateQ,
  removeQ: removeQ,
  indexQ: indexQ,
  MongoClient: MongoClient
}