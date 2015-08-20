(function () {
   'use strict';
   // this function is strict...
}());
$(document).ready(function() {

//User contructor
var Tracker = function(){
  this.isNewBattle = true;
};
var Photo = function(path) { //constructor
  this.path = path;
  this.img        = document.createElement('img');
  this.img.src    = this.path;
  this.votes = 0;
   $(this.img).on('click', function(e){
    if(tracker.isNewBattle){
      e.target.votes++;
      $(e.target).toggleClass('winner');
      tracker.isNewBattle = false;
      var targetVote = e.target.votes;
      var otherVote = 0;
      if(e.target.parentElement.id === 'imgL'){
        otherVote = document.getElementById('imgR').children[0].votes;
        chart(targetVote, otherVote);
      } else {
        otherVote = document.getElementById('imgL').children[0].votes;
        chart(otherVote, targetVote);
      }
    }
  });
};


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

Tracker.prototype.getRandomInt = function() {

  return Math.floor((Math.random() * 14) + 0);
  //generate a random number to select an image from photoArray

};

var battleCats = new Tracker ();
var leftCats = photoArray[battleCats.getRandomInt()].path;
var rightCats = photoArray[battleCats.getRandomInt()].path;

while (leftCats === rightCats) {
  rightCats = photoArray[battleCats.getRandomInt()].path;
  leftCats = photoArray[battleCats.getRandomInt()].path;
}

console.dir (leftCats);
console.dir (rightCats);

Tracker.prototype.displayPhotos = function() {
var first=document.getElementById('left');
var leftPhoto = document.createElement('img');
leftPhoto.src=leftCats;
first.appendChild(leftPhoto);

var second=document.getElementById('right');
var rightPhoto = document.createElement('img');
rightPhoto.src=rightCats;
second.appendChild(rightPhoto);
};

battleCats.displayPhotos();

document.getElementById('left').addEventListener('click', function (e) {
        e.target.style.outline = "solid blue 5px";
});

document.getElementById('right').addEventListener('click', function (e) {
        e.target.style.outline = "solid red 5px";
});

var pieData = [
  {
    value: 20,
    color:"#878BB6"
  },
  {
    value : 40,
    color : "#4ACAB4"
  },
];
var pieOptions = {
  segmentShowStroke : false,
  animateScale : true
};

var countries= document.getElementById("countries").getContext("2d");
new Chart(countries).Pie(pieData, pieOptions);
Tracker.prototype.displayWinner = function() {

};
});


