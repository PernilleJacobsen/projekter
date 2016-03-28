/**
 * Created by Pernille on 08-03-2016.
 */
var jokes = require("./Model/jokesFacade");
var connection = require("./db/db");
var ObjectID = require("mongodb").ObjectID;

connection.connect("mongodb://localhost:27017/test", function(){
    jokes.allJokes(function(err, data){
        if(err){
        console.log("Uuppps");
        }
        else{
            console.log(data);
        }
    });
});


/*connection.connect("mongodb://localhost:27017/test", function(){
    var id = "56e55e78d25b87500d1c8a03";
    jokes.findJoke(id, function(err, data){
        if(err){
            console.log("Uuppps");
        }
        else{
            console.log(data);
        }
    });
});*/
/*

connection.connect("mongodb://localhost:27017/test", function(){
    var id = "56e55e78d25b87500d1c8a04";
     var toUpdate = { $set: { joke:" I'm edited trice"}, $addToSet : {type: "replaced"}}
    jokes.editJoke(id,toUpdate,function(err, data){
        if(err){
            console.log("Uuppps");
        }
        else{
            console.log(data);
        }
    });
});
*/

/*
connection.connect("mongodb://localhost:27017/test", function(){
    var id = "56e55e78d25b87500d1c8a05";
    jokes.deleteJoke(function(id, err, data){
        if(err){
            console.log("Uuppps");
        }
        else{
            console.log(data);
        }
    });
});
*/

