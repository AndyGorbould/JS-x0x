// __          ________ _      _____ ____  __  __ ______ _ 
// \ \        / /  ____| |    / ____/ __ \|  \/  |  ____| |
//  \ \  /\  / /| |__  | |   | |   | |  | | \  / | |__  | |
//   \ \/  \/ / |  __| | |   | |   | |  | | |\/| |  __| | |
//    \  /\  /  | |____| |___| |___| |__| | |  | | |____|_|
//     \/  \/   |______|______\_____\____/|_|  |_|______(_)


// create an instance of the audio context
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext = new AudioContext();



// where are the samples?
var audioFileURL = "./audio/TR909/BT0A0A7.WAV";


// create a sequencer row
function createRow() {
    const body = document.getElementById("target"); // where is is going
    let tbl = document.createElement("table"); // make a table
    let tr = document.createElement("tr"); // make a table
  
    for (let i = 0; i < 16; i++) {
        const td = tr.insertCell();
    }
    body.appendChild(tr);
  }
  
  createRow();
