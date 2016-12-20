
function WCJS_Controller(player, keyBindings) {

	this.keyCodes = {
			spacebar	: 32,
			leftArrow	: 37,
			upArrow		: 38,
			rightArrow	: 39,
			downArrow	: 40,
			escape		: 27
		};

	this.init = function(player, keyBindings) {
		this.player 		= player;
		this.keyBindings 	= keyBindings || {};
		document.addEventListener('keydown', this.handleKeyDown.bind(this));
	}

	this.getBoundCommand = function(keycode) {

		if (typeof this.keyBindings[keycode] === 'function') {

			this.keyBindings[keycode].bind(this).call();
			return true;
		
		} else {

			return false;
		}
	}

	this.handleKeyDown = function(e) {

		if (!this.getBoundCommand(e.which)) {

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

	this.init(player, keyBindings);
}

module.exports.getController = function(player, keyBindings) {
	return new WCJS_Controller(player, keyBindings);
}