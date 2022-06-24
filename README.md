# JS-x0x

The goal is to create a JavaScript version of the Roland TR series of drum machines.

**useful resources:**
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [a few JS audio APIs that could be used](https://bashooka.com/coding/web-audio-javascript-libraries/)
- [Tone.js](https://tonejs.github.io/)
- [Wavesurfer.js](https://wavesurfer-js.org/)


**notes:**

lay out a 16x1 grid (16x td, 1x tr), make a loop & light up the correct step, make 1 grid per sound!
buttons; getElementByTag, then foreach to give them an ID ?


**ideas:**

use the OscillatorNode to make a synthesised kick body with a BiquadFilterNode on a sample for tops
add a visualizer for the audio output based on [this](https://wavesurfer-js.org/example/microphone/index.html)
