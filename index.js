
function WCJS_Controller(player) {

	this.keyCodes = {
			spacebar	: 32,
			leftArrow	: 37,
			upArrow		: 38,
			rightArrow	: 39,
			downArrow	: 40,
			escape		: 27
		};

	this.init = function(player) {
		this.player = player;
		document.addEventHandler('keydown', this.handleKeyDown.bind(this));
	}


	this.handleKeyDown = function(e) {
		switch (e.which) {
			case this.keyCodes.spacebar:
				this.startOrPause();
				break;
			case this.keyCodes.leftArrow:
				this.changePlaybackTime(-5000);
				break;
			case this.keyCodes.rightArrow:
				this.changePlaybackTime(5000);
				break;
			case this.keyCodes.downArrow:
				this.changeVolume(-10);
				break;
			case this.keyCodes.upArrow:
				this.changeVolume(10);
				break;
			default:
				return;
			break;
		}
	}

	this.startOrPause = function() {
		this.player.togglePause();
	}

	this.changeVolume = function(diff) {
		var newVolume = this.player.volume() + diff;
		this.player.volume(newVolume);
	}

	this.changePlaybackTime = function(diff) {
		var newTime = this.player.time() + diff;
		this.player.time(newTime);
	}

	this.init(player);
}

module.exports.getController = function(player) {
	return new WCJS_Controller(player);
}