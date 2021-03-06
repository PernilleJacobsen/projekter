/**
 * Created by Pernille on 28-03-2016.
 */
var app = angular.module("app", ['ngRoute']);

app.controller("RandomController", function ($http) {
    var self = this;
    $http.get("http://localhost:3000/api/joke/random").success(function (data) {
        self.joke = data.joke;
    })

});

app.controller("Controller", function ($http) {
    var self = this;
    $http.get("http://localhost:3000/api/jokes").success(function (data) {
        self.jokes = data.jokes;
    })

});
/*

app.controller("PostController", function ($http) {
    var self = this;

    self.addJoke = function () {
        var data = {
            joke: self.joketext
        };

        $http.post("http://localhost:3000/api/joke", JSON.stringify(data)).success(function (data) {
            alert('Result: ' + data.message)
        })
    }

});
*/


app.config(function ($routeProvider) {
    $routeProvider
        .when("/jokes", {
            templateUrl: "jokes.html",
            controller: "Controller as ctrl"
        })
        .when("/random", {
            templateUrl: "random-joke.html",
            controller: "RandomController as ctrl"
        })/*
        .when("/add", {
            templateUrl: "add-joke.html",
            controller: "PostController as ctrl"
        })*/
        .otherwise({
            redirectTo: "/jokes"
        })
});
