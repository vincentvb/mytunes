// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

	url: 'http://parse.CAMPUS.hackreactor.com/mytunes/classes/songs',

	initialize: function() {
		this.fetch(); 

	},
	parse:function(response){

		return response.results;
	},

  model: SongModel

});
