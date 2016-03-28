/**
 * Created by Pernille on 08-03-2016.
 */
var expect = require("chai").expect;
var jokes  = require("../Model/jokesFacade");
var connection = require("../db/db");

var testJokes = [
    {
        "_id" : "56e55e78d25b87500d1c8a03",
        "joke" : " Reality is an illusion created by a lack of alcohol",
        "type" : ["short", "alcohol", "quote"],
        "reference": { "author" : "Someone", "link" : ""},
        "lastEdited" : new Date()
    },
    {
        "_id" : "56e55e78d25b87500d1c8a04",
        "joke" : " hest",
        "type" : ["short", "alcohol", "quote"],
        "reference": { "author" : "Someone", "link" : ""},
        "lastEdited" : new Date()
    },
    {
        "_id" : "56e55e78d25b87500d1c8a05",
        "joke" : " I´m not a joke",
        "type" : ["short", "alcohol", "quote"],
        "reference": { "author" : "Someone", "link" : ""},
        "lastEdited" : new Date()
    }
];

describe("the jokes factory", function(){
    before(function (done){
        connection.connect("mongodb://localhost:27017/test", function(){
            done();
        });
    });
    beforeEach(function(done){
        var db = connection.get();
        db.collection("jokes").deleteMany({}, function(err, data){
            if(err){
                throw new Error(err);
            }
            db.collection("jokes").insertMany(testJokes, function(err, data){
                if(err){
                    throw new Error(err);
                }
                done();
            });
        })
    });
    it("should find 3 jokes", function(done){
        jokes.allJokes(function(err, data){
            expect(data.length).to.be.equal(3);
            done();
        })
    })

    it("should find the joke with id 56e55e78d25b87500d1c8a03", function(done){
       var id = "56e55e78d25b87500d1c8a03";
        jokes.findJoke(id, function(err, data){
            var jokeObject = data.joke;
            console.log(jokeObject);
            expect(jokeObject).to.contain(["Reality is an illusion created by a lack of alcohol"]);
            done();
        })
    })

/*
    it("should edit the joke with id 56e55e78d25b87500d1c8a04", function(done){
        var id = "56e55e78d25b87500d1c8a04";
        var toUpdate = { $set: { joke:"I'm edited enough"}, $addToSet : {type: "replaced"}}
        jokes.editJoke(id, toUpdate, function(err, data){
            jokes.findJoke("56e55e78d25b87500d1c8a04",function(err, data){
                var jokeObject = data.joke;
                console.log(jokeObject);
                expect(jokeObject).to.contain(["I'm edited enough"]);
                done();
            });
        })
    })
*/

})
