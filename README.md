# wcjs-keybindings

Keyboard shortcuts for wcjs-player, the node implementation of webchimera.js, which is basically VLC player in a javascript wrapper - awesome!
Simply `require` and pass it an instance of wcjs-player to bring a keyboard powered, more desktop-like experience to your users. It is tiny, lightweight,
concise and has no external dependencies at all!

> ### Note
> The module was first created for the Electron runtime and its webkit container, so currently only supports browsers that adhere to the standard implementation of `document.addEventListener`.
> Cross-browser support for web implementation is coming soon.

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

> ### Note
> Custom keybindings are coming soon!
