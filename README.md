# Picture-in-picture Player

Exploring making my own picture-in-picture player using React

## Demo

![demo](/public/demo.gif)

## Why I built this

Haven’t we all gotten used to short-form videos and can no longer sit through anything more than 3 mins? Yeah me too.

Ever since I started using Arc Browser, I’ve been really enjoying the built-in picture-in-picture player.

Curious about how to make something similar, I thought I’d give it a shot.

## Why not just use browser’s built-in pip?

Can’t trigger pip on scoll, only on click or manually selecting option by right clicking 🤷‍♂️

## Features

1. trigger picture-in-picture when main placeholder is _mostly_ out of view
2. fade in animations
3. close button to close picture-in-picture
4. trigger picture-in-picture only when player is playing

## How this works:

1. **Check if video is in view**
   Intersection Observer API: browser API that allows you to monitor when an element enters or exits the viewport (the visible portion of a web page)

2. **Position player at bottom right of screen when out of view**
   Conditionally add `fixed` class to player when out of original placeholder view

3. **Animate player when transitioning between views**
   Use keyframes and `animate` utility classes to animate player when transitioning between views

4. **Trigger picture-in-picture only when playing**
   Conditionally trigger picture-in-picture only when player is playing by checking`mediapaused` attribute in the `MediaController`
5. **Close button to close picture-in-picture**
   Conditionally apply close button only when player is in floating state, handle state of player when close button is clicked
