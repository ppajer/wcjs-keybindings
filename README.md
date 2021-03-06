# wcjs-keybindings

Keyboard shortcuts for wcjs-player, the node implementation of webchimera.js, which is basically VLC player in a javascript wrapper - awesome!
Simply `require` and pass it an instance of wcjs-player to bring a keyboard powered, more desktop-like experience to your users. It is tiny, lightweight,
concise and has no external dependencies at all!

*This module is fully cross-browser compatible.*

## How to use

Include `wcjs-keybindings` in your project's dependency list, run `npm install`, then whenever you need some keybinding sugar for your wcjs-player, get a controller from this module.

```
require('wcjs-keybindings').getController(wcjsPlayerInstance);
``` 

## Default Keybindings

- **Spacebar**: play/pause
- **Right Arrow**: forwards 5 seconds
- **Left Arrow**: backwards 5 seconds
- **Up Arrow**: increase volume by 5%
- **Down Arrow**: decrease volume by 5%

## Custom keybindings

To include custom keybindings, you can pass an object as second argument to the constructor. This object must have the desired keycodes as keys and function definitions as values.
Within the scope of these handler functions, you can use `this` to refer to the controller, and `this.player` to refer to the instance of wcjs-player handler by the controller.
Here is an example to toggle fullscreen mode upon pressing <kbd>F</kbd>

```
var keyBindings = {
	70 : function() {
		this.player.toggleFullscreen();
	}
};

require('wcjs-keybindings').getController(wcjsPlayerInstance, keyBindings)
```

