$(document).on("ready", function(){
	SC.initialize({
	  client_id: 'd62ca8d5a43d91af8fe5465e802092b0'
	});

	var track_url = 'https://soundcloud.com/anirudh_eka/sets/empty-room';
	SC.oEmbed(track_url, { auto_play: true, maxheight: 80, show_comments: false }).then(function(oEmbed) {
	  console.log('oEmbed response: ', oEmbed);
	  $("#player").html(oEmbed.html)
	});
})