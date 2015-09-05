
'use strict'

var Photo = function(fileLocation, startVotes) {
  this.path  = fileLocation;
  this.votes = startVotes;
};

var Tracker = function() {

  this.photos = [];

  this.maxPhotos = 14;

  this.leftPhoto = null;

  this.rightPhoto = null;

  $('#left').on('click', $.proxy(this.leftClick, this));
  $('#right').on('click', $.proxy(this.rightClick, this));
  $('#next').on('click', $.proxy(this.showNext, this));
};

Tracker.prototype.initializeLocalData = function() {
  for(var i = 0; i < this.maxPhotos; i++) {
    var photo = new Photo('img/kitten/kit' + (i + 1) + '.jpg', 0);
    this.photos.push(photo);

  }
};

Tracker.prototype.initializeImgurData = function() {
  $.ajax ( {
    url: 'https://api.imgur.com/3/album/DDoWy',
    method: 'GET',
    headers: {
      'Authorization': 'Client-ID 76cf5f4a356bbc1'
    }
  })
  .done($.proxy(function(res) {
    for (var i = 0; i < res.data.images.length; i++) {
      var photo = new Photo(res.data.images[i].link, 0);
      this.photos.push(photo);
    }
    this.showNext();
  }, this))
  .fail(function(err) {
    console.log(err);
  });
};


Tracker.prototype.leftClick = function() {
  $('#left').addClass('highlight');
  this.leftPhoto.votes++;

}

Tracker.prototype.rightClick = function() {
  $('#right').addClass('highlight');
  this.rightPhoto.votes++;

}

Tracker.prototype.generateRandom = function() {
  return Math.floor(Math.random() * this.photos.length);
};

Tracker.prototype.randomPhoto = function() {
  return this.photos[this.generateRandom()];
};

Tracker.prototype.showNext = function() {
  this.leftPhoto = this.randomPhoto();
  this.rightPhoto = this.randomPhoto();
  while (this.leftPhoto === this.rightPhoto) {
    this.rightPhoto = this.randomPhoto();
  }
  $('#left').attr('src', this.leftPhoto.path);
  $('#right').attr('src', this.rightPhoto.path);
  $('#left').removeClass('highlight');
  $('#right').removeClass('highlight');
};


$(document).ready(function() {

  var tracker = new Tracker();
  tracker.initializeImgurData();
});
