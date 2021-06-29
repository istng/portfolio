# Personal Web Portfolio

This is a personal web portfolio made with Vue.js to show case my shorts and edited videos. It was also a way to learn and apply my knwoledge of JavaScript, Vue.js and design and CSS.  

## Built Look

The built version looks like this:

GIF desktop

GIF mobile

### Project Structure

The project counts with the `router` module, having a `Home.vue` as its main view point. Given that it only showcases my videos, for the moment I did not add more views.  
There are six main components used in home in roughly this order:

- Header
- Video Category
- Video
- Credits Card
- Bio
- Footer

Each component is basically what is called. Video components are nested on Video Category components, and Credits Card are nested within its respectin Video components. This is because each video category has many videos, and each video has credits.  
The effect by wich the video _iframe_ appears on screen above everything else is made with _modal_ logic inside video components.  
There is an extra component called `FlipCard.vue`. This component is used to make the flip effect between the thumbnail of a video and its credits card.

### Future Work

By this point the web is usable and stable, but in the future it would be nice to include this changes:

- Smooth background darkening when opening a video
- Handle swipe back gesture on mobile on open video to close it
- Customize iframe to have a standarized look, independent of video provider
- Change behavior of email link to copy email to clipboard



Any question feel free to ask me!