/**
 * Created by Pernille on 08-03-2016.
 */
var connect = require("../db/db");
var ObjectID = require('mongodb').ObjectID;

//vi laver facaden fordi vi så senere kan teste den
//var db = require("../db/db");
var connect = require("../db/db");
var ObjectID = require("mongodb").ObjectID;

function _allJokes(callback){
    var db = connect.get();

    db.collection("jokes").find({}).toArray(function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    });
}

function _findJoke(id,callback){
    var db = connect.get();
    db.collection("jokes").findOne({"_id": id},(function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    }));
}

function _editJoke(id, toUpdate, callback){
    var db = connect.get();
    db.collection("jokes").updateOne({"_id": id}, toUpdate, function(err, data){
            if (err)
            {
                callback(err);
            } else
            {
                callback(null, data);
            }
        });
    }


//husk at ændre last edited for hver opdate
function  _deleteJoke(id, callback){
    var db = connect.get();
    db.collection("jokes").remove({"_id": id},function(err, data){
        if(err)
        {
            callback(err);
        } else
        {
            callback(null, data);
        }
    });
}

function _randomJoke(callback) {

    var db = connect.get();

    db.collection("jokes").find({}).toArray(function (err, data) {
        if (err) {
            callback(err);
        } else {
            var random = Math.floor((Math.random() * data.length));
            var randomElement = data[random];
            callback(null, randomElement);
        }
    });
}


exports.allJokes = _allJokes;
exports.findJoke = _findJoke;
exports.editJoke = _editJoke;
exports.deleteJoke = _deleteJoke;
exports.randomJoke = _randomJoke;

