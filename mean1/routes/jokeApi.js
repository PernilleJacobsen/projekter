/**
 * Created by Pernille on 27-03-2016.
 */
var express = require('express');
var router = express.Router();
var jokes = require("../model/jokesFacade");


router.get('/joke/random', function(req, res, next){
    jokes.randomJoke(function(err, data){
        res.send({joke: data});
    });
});
router.get('/jokes', function(req, res, next){
    jokes.allJokes(function(err, data){
        res.send({joke: data});

    });
});
//FIND a specific joke
router.get('/joke/:_id', function (req, res, next){
    var id = req.params._id;
    jokes.findJoke(id, function(err, data){
        if(err){
            res.json(getJsonError());
        }
        res.json(data);
    });
});
router.get('/joke/:_id', function(req, res, next){
    console.log("ID : " + req.params._id);
    jokes.deleteJoke(req.params._id, function(err, data){
        res.send(req.params._id);
    });

});
router.put('/joke', function (req, res, next) {
    var editJoke =
    {
        joke: req.body.joke,
        type: req.body.type,
        reference: req.body.reference,
        lastEdited: new Date().toISOString()
    };

    jokes.editJoke(req.body._id, editJoke, function (err, data) {
        if (err) {
            res.json(getJsonError(err));
        }
        res.json(data);
    });
});
/*

router.post('/joke', function(req, res, next){
    var joke = req.body;
    console.log("Joke in add :" + JSON.stringify(joke));
    jokes.addJoke(joke,function(err, data){
        res.send(joke);
    })
});
*/

module.exports = router;


