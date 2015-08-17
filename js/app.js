'use strict'

var Photo = function(fileLocation) { //constructor
  this.path = fileLocation;
  this.votes = 1;
  //this.index =
}


var alex = new Photo('img/kitten_pictures/Alex.jpg');
var bob = new Photo('img/kitten_pictures/Bob.jpg');
var boots = new Photo('img/kitten_pictures/Boots.jpg');
var felica = new Photo('img/kitten_pictures/Felica.jpg');
var frank = new Photo('img/kitten_pictures/Frank.jpg');
var fred = new Photo('img/kitten_pictures/Fred.jpg');
var jack = new Photo('img/kitten_pictures/Jack.jpg');
var jill = new Photo('img/kitten_pictures/Jill.jpg');
var kasey = new Photo('img/kitten_pictures/Kasey.jpg');
var kora = new Photo('img/kitten_pictures/Kora.jpg');
var molly = new Photo('img/kitten_pictures/Molly.jpg');
var steve = new Photo('img/kitten_pictures/Steve.jpg');
var tigger = new Photo('img/kitten_pictures/Tigger.jpg');
var todd = new Photo('img/kitten_pictures/Todd.jpg');

var photoArray = [alex, bob, boots, felica, frank, fred, jack, jill, kasey, kora, molly, steve, tigger, todd];

var Tracker = function() {


}

Photo.prototype.highlight = function() {
  //highlight the photo after it is clicked
};

Tracker.prototype.waitingForVote = function() {
  //receive the click and
  //increment the vote count
  //event listener on each photo(put inside div)
  //highlight()
  //drawTheChart()?
  //giveUserOptionToVoteAgain()
  //display photos
  //get random #()
  //receive vote
};

Tracker.prototype.getRandomInt = function() {

  return Math.floor((Math.random() * 14) + 0);
  //generate a random number to select an image from photoArray

};
var battleCats1 = new Tracker ();
var battleCats2 = new Tracker ();
console.log(photoArray[battleCats1.getRandomInt()]);
console.log(photoArray[battleCats2.getRandomInt()]);

while (battleCats1 === battleCats2) {
  photoArray[battleCats1.getRandomInt()];
}


Tracker.prototype.displayPhotos = function() {
  //display the randomly selected photos
  //prevent picking same photo twice
  //if (photo1 === photo2) then re-roll
};

Tracker.prototype.waitingForVote =  function() {
  action1()
  action2()
  action3()
};

Tracker.prototype.displayWinner = function() {
 /* action4()
  action5()
  action6()
  highlight photo()*/
};
/////////////////////////////////////////
//some 'document.getElementById' variables to access and maniputlate the document

