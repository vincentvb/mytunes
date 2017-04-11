// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,


  initialize: function() {
  	console.log(this);
  	this.on('add', function() {
  		if (this.length < 2) {
  			this.playFirst();
  		}
  	}, this)

  	this.on('ended', function() {
  		if (this.models.length > 1) {

  		this.shift();
  		this.playFirst();
  	}
  	}, this)
},

  playFirst: function() {


  },

});