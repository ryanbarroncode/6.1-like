var Like = require("./models/like.js").Like;
var $ = require('jquery');
var Backbone = require('backbone');

var like = new Like();

//This is setting an event listener. when the button is clicked it is going to run the method in like.js incrementNumber.
$('button').on('click', function(event){
  event.preventDefault(); //prevents the default action of an event from happening
  like.incrementNumber();//like is a new instance of Like, and .incrementNumber() is the method we called to add +1
$("#spanzero").html(like.get('number'))//targets the html element #spanzero and gets the number
$("#spanlikes").html(" like")//targets the word in html targeted with #spanlikes.


//This is saying if the number is NOT equal to 1, then set the html of #spanlikes to "likes" so 0=likes 1=like any number greater than 1=likes
if(like.get('number') !== 1){
$("#spanlikes").html(" likes")//sets the word to likes if the number is Not equal to 1.
}
});
