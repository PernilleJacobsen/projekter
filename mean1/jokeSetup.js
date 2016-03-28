/**
 * Created by Pernille on 08-03-2016.
 */
var jokes = [

    {
        "joke" : " Reality is an illusion created by a lack of alcohol",
        "type" : ["short", "alcohol", "quote"],
        "reference": { "author" : "Someone", "link" : ""},
        "lastEdited" : new Date()
    },
    {
        "joke" : "I used to think the brain was the most important organ. Then I thought, look whatâ€™s telling me that",
        "type" : ["short", "joke"],
        "reference": { "author" : "Unknown", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
        "lastEdited" : new Date()
    },
    {
        "joke" : "You kill vegetarian vampires with a steak to the heart",
        "type" : ["short", "joke","foot"],
        "reference": { "author" : "Unknown", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
        "lastEdited" : new Date()
    },
    {
        "joke" : "A blind man walks into a bar. And a table. And a chair",
        "type" : ["short", "joke","blind"],
        "reference": { "author" : "Someone", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
        "lastEdited" : new Date()
    },
    {
        "joke" : "How does NASA organize their company parties? They planet",
        "type" : ["short", "joke","riddle"],
        "reference": { "author" : "Unknown", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
        "lastEdited" : new Date()
    }
    ,
    {
        "joke" : "Why was six afraid of seven? Because seven was a well known six offender",
        "type" : ["short", "joke","riddle"],
        "reference": { "author" : "Unknown", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
        "lastEdited" : new Date()
    }
]

var result = db.jokes.insert(jokes);
printjson(result);
