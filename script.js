// __          ________ _      _____ ____  __  __ ______ _ 
// \ \        / /  ____| |    / ____/ __ \|  \/  |  ____| |
//  \ \  /\  / /| |__  | |   | |   | |  | | \  / | |__  | |
//   \ \/  \/ / |  __| | |   | |   | |  | | |\/| |  __| | |
//    \  /\  /  | |____| |___| |___| |__| | |  | | |____|_|
//     \/  \/   |______|______\_____\____/|_|  |_|______(_)


// create an instance of the audio context
// var AudioContext = window.AudioContext || window.webkitAudioContext;

// var audioContext = new AudioContext();



// where are the samples?
// var audioFileURL = "./audio/TR909/BT0A0A7.WAV";


// create a sequencer row, 16 cells with buttons inside
function createRow() {
    const body = document.getElementById("target"); // where is is going
    let tr = document.createElement("tr"); // make a row

    for (let i = 0; i < 16; i++) {
        const step = document.createElement("input");
        step.id = "step-" + i;
        step.className = "step";
        step.type = "button"
        const td = tr.insertCell();
        td.appendChild(step);
    }
    body.appendChild(tr);

    
}

createRow();


let allSteps = document.querySelectorAll(".step");
console.log(allSteps);