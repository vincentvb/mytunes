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
      console.log("HERE")
  		if (this.models.length > 1) {
  		this.shift();
  		this.playFirst();
  	}
  	}, this)

    this.on('dequeue' , function() {

      this.remove();
    },this)

},

  playFirst: function() {
    console.log(this.models)

    this.models[0].play()
  },

});