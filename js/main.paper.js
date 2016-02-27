// written in Paperscript
function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}


function Line(text){			 
	this.pointText = new PointText({
	    content: text,
	    fillColor: 'black',
	    fontFamily: "Verdana",
	    fontWeight: 'normal',
	    fontSize: 25,
	    opacity: 0
	});
	var x = Math.floor(getRandom(30, ($('#myCanvas').width() - (30 + this.pointText.bounds.width))));
	var y = Math.floor(getRandom(30, ($('#myCanvas').height() - (30 + this.pointText.bounds.height))));
	console.log(($('#myCanvas').width() - (10 + this.pointText.bounds.width)))
	this.pointText.point = new Point(x, y)
}

Line.prototype.fadeIn = function() {
	this.pointText.opacity += 0.01
	if(this.pointText.opacity >= 1) {this.fadeInComplete = true }
}

Line.prototype.fadeOut = function() {
	this.pointText.opacity -= 0.01
	if(this.pointText.opacity <= 0) {
		this.pointText.opacity = 0
		this.fadeOutComplete = true }
}

Line.prototype.fadeInComplete = false;
Line.prototype.fadeOutComplete = false;
Line.prototype.opaqueTime = 0;
Line.prototype.animate = function(callback) {
	if(!this.fadeInComplete) {
		this.fadeIn()	
	} else if (this.opaqueTime < 180) {
		this.opaqueTime += 1
	} else if (!this.fadeOutComplete && this.opaqueTime >= 20) {
		this.fadeOut()
	} else {
		callback();
	}
}

function Pause(framesToPause) {
	this.framesToPause = framesToPause
	this.frames = 0
}
Pause.prototype.animate = function(callback) {
	if (this.frames < this.framesToPause) {
		this.frames += 1
		console.log("pause")
	} else {
		callback()
	}
}

function Reel(scenes) {
	this.scenes = scenes;
}

Reel.prototype.animate = function() {
	if(this.scenes.length > 0) {
		var self = this;
		this.scenes[0].animate(function(){
			self.scenes.shift()
		})
	}
}

var reel = new Reel([new Pause(15), 
	new Line("Let go of the mouse"), 
	new Line("and the keyboard"), 
	new Line("Close the factory \nyou have turned your mind into"),
	new Line("Let the pipes rust"),
	new Line("and moss grow between the gears"),
	new Line("no obligation to produce"),
	new Line("a witty remark, an insightful thought"),
	new Line("a reason for spending the time"),
	new Line("with nothing to produce\n there is no resource to devour"),
	new Line("no mining of moments"),
	new Line("Let the birds"),
	new Line("the rain and the echoes"),	
	new Line("come and go as they please"),
	new Line("Stretch open your mind to it all")])

function onFrame(event) {
	reel.animate()
}