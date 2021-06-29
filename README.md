# Personal Web Portfolio

This is a personal web portfolio made with Vue.js to showcase my shorts and edited videos. It was also a way to learn and apply my knwoledge of JavaScript, Vue.js, web design and CSS.  

## Built Look

The built version looks like this:

https://user-images.githubusercontent.com/19519872/123815444-e0b7c500-d8cc-11eb-94b7-6dd5c5cf15e5.mp4

https://user-images.githubusercontent.com/19519872/123815456-e3b2b580-d8cc-11eb-90c7-50cdaa998e52.mp4

### Project Structure

The project counts with the `router` module, having a `Home.vue` as its main view point. Given that it only showcases my videos, for the moment I did not add more views.  
There are six main components used in home with roughly this order:

- Header
- Video Category
- Video
- Credits Card
- Bio
- Footer

Each component is basically what is called. Video components are nested on Video Category components, and Credits Card are nested within its corresponding Video components. This is because each video category has many videos, and each video has credits.  
The effect by which the video _iframe_ appears on screen above everything is made with _modal logic_ inside the video components.  
There is an extra component called `FlipCard.vue`. This component is used to make the flip effect between the thumbnail of a video and its credits card.

### Future Work

By this point the web is usable and stable, but in the future it would be nice to include this changes:

- Smooth background darkening when opening a video
- Handle swipe back gesture to close opened video on mobile
- Customize iframe to have a standarized look, independent of video provider
- Copy email to clipboard on email link clicked



Any question feel free to ask me!
