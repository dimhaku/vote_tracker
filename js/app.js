'use strict'

var Photo = function(fileLocation) { //constructor
  this.path = fileLocation;
  this.votes = 0;
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

battleCats.displayPhotos()

var vote1 = document.getElementById('leftCat')
vote1.addEventListener('click', function(e){
  var targetSrc = e.target.src.slice(43, 80);
    photoArray.forEach(function(val) {
      if (val.path === targetSrc) {
        val.votes++;
    }
  })
})

var vote2 = document.getElementById('rightCat')
vote2.addEventListener('click', function(e){
  var targetSrc = e.target.src.slice(43, 80);
    photoArray.forEach(function(val) {
      if (val.path === targetSrc) {
        val.votes++;
    }
  })
})

document.getElementById('left').addEventListener('click', function (e) {
        e.target.style.outline = "solid blue 5px";
});

document.getElementById('right').addEventListener('click', function (e) {
        e.target.style.outline = "solid red 5px";
});

Tracker.prototype.waitingForVote =  function() {
  action1()
  action2()
  action3()
};

var countries= document.getElementById("countries").getContext("2d");
new Chart(countries).Pie(pieData, pieOptions);
var pieData = [
  {
    value: 20,
    color:"#878BB6"
  },
  {
    value : 40,
    color : "#4ACAB4"
  },
  {
    value : 10,
    color : "#FF8153"
  },
  {
    value : 30,
    color : "#FFEA88"
  }
];
var pieOptions = {
  segmentShowStroke : false,
  animateScale : true
}


Tracker.prototype.displayWinner = function() {
 /* action4()
  action5()
  action6()
  highlight photo()*/
};
/////////////////////////////////////////
//some 'document.getElementById' variables to access and maniputlate the document

