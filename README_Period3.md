# projekter
Period 3
1 - Explain, generally, what is meant by a NoSQL database. 

Cannot be defined according to Fowler - but characteristica is:

Non relational

Schema less - but Mongoose and other can add a kind of schema to the database

Cluster friendly....horizontal scaling

open source

21. centery web

2 - Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.

Pro´s 

No need for normalizing data

If the amount of data is huge and there are no reason for relating these data to each other it is the best choice for storing data hence the possibility of creating huge clusters of servers with databases.

If data to be updated is stored in only one document the persistence is ATOMIC

SQL databases does not work very well in that size since related data will be distributed among different servers. It is slow and gives a huge risk regarding persistence. 

con´s

query language is different from database to database

if data have relations to other documents in the database it is more secure to use af relational database due to the concept of transacrions.

Compromise consistency in favor of availability (CAP theorem).

3 - Explain how databases like MongoDB and redis would be classified in the NoSQL world 

MongDB er document oriented and Aggregate oriented database

Redis is a key value store and a in memory data structure server

4 - Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB 
Mongoose adds an object modeling packaage to Node.js like ORM(object relational mapping) for relational databases
CRUD operationer gets easier to handle

MongoDB is schema-less and Mongoose adds schemas. This might seem counterintuitive at first... but Real life data has (often) structure and (often) types

5 - Explain, using relevant examples, the strategy for querying MongoDB (all CRUD operations) 
Look at Mean1 - jokesFacade for all examples:

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

6 - Demonstrate, using a REST-API, how to perform all CRUD operations on a MongoDB 

Find joke:
When a user enter the correct url in the browser - for instance http://localhost:3000/api/joke/idnr
I call the router in the api file
router.get('/joke/:_id', function (req, res, next){
    var id = req.params._id;
    jokes.findJoke(id, function(err, data){
        if(err){
            res.json(getJsonError());
        }
        res.json(data);
    });
});

The router detects the right method to use based on the url and the get, post, put or delete request.

In this case the url ends on the id we want to fetch from the database and we are able to extract it via the variable id that equals the request params...id

We send the id to the findJoke method in the jokeFacade

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

And this method accesses the database via the variable db and via the findOne function query the database and retrieves the correct data

7- Explain the benefits from using Mongoose, and provide an example involving all CRUD operations 
When you implement Mongoose you get to use schemas - kind of like tables in an relational database but mostly without relations between the different schemas

Look at Mongoose2 for all examples

router.route('/bears/:bear_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })
    
8 - Explain how redis "fits" into the NoSQL world, and provide an example of how to use it. 


One of the most apparent use cases for Redis is using it as a Session Store. The advantages of using Redis over other session stores, is that Redis offers persistence. 

While maintaining a cache isn't typically mission critical with regards to consistency, most users wouldn't exactly enjoy if all their cart sessions went away

9 - Explain, using a relevant example, how redis (or a similar) can increase scalability (drastic) for a server using server side sessions 

When your customer or user logs in, they authenticate and receive a token. This token then allows them to interact with any server in your web tier - the token is sent each time. There is no need for a "master" server and "slave" servers, because each server is the same. This allows you to scale horizontally very easily. 

The session data is then stored in a fast database like Redis.


10 - Explain, using a relevant example, a full MEAN application including relevant test cases to test the REST-API (not on the production database) 

Mean1 currently without angular

