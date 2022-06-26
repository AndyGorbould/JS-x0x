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


// transport button
function createTransport() {
    let transportButton = document.createElement("button");
    transportButton.innerHTML = "Play/Stop";
    transportButton.id = "transport";
    transportButton.className = "transport";
    document.body.appendChild(transportButton);
}
createTransport();


// create a sequencer row, 16 cells with buttons inside
function createRow() {
    const body = document.getElementById("target"); // where is is going
    let tr = document.createElement("tr"); // make a row

    for (let i = 0; i < 16; i++) {
        const step = document.createElement("input");
        step.id = "step-" + i;
        step.className = `step, ${i}`;
        step.type = "button"
        step.addEventListener("click", stepToggle);
        const td = tr.insertCell();
        td.appendChild(step);
    }
    body.appendChild(tr);


}

createRow();



var count = 1;
function stepToggle() {
    step = document.getElementsByClassName(".step")
    if (count == 0) {
        this.className = "stepActive"
        this.style.backgroundColor = "stepNotActive"
        count = 1;
    }
    else {
        this.className = "stepNotActive"
        this.style.backgroundColor = "stepNotActive"
        count = 0;
    }
    console.log(count);
}