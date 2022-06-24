# JS-x0x

The goal is to create a JavaScript version of the Roland TR series of drum machines.

useful resources:
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API - Web Audio API
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API - Using the Web Audio API


notes:
lay out a 16x1 grid (16x td, 1x tr), make a loop & light up the correct step, make 1 grid per sound!


ideas:
use the OscillatorNode to make a synthesised kick body with a BiquadFilterNode on a sample for tops
add a visualizer for the audio output based on https://wavesurfer-js.org/example/microphone/index.html
