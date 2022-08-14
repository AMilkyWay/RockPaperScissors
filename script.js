var what = null;

let switchTo = function(which) {
    document.location.assign(which);
}

let playSound = function(which) {
    let sound = new Audio(which);
    sound.play();
}

let activate = function() {
    let rand = Math.floor(Math.random() * 4)
    switch(rand) {
        case 1:
            what = "win";
            break;
        case 2:
            what = "tie";
            break;
        default:
            what = "lose";
            break;
    }
    localStorage.setItem("what", what)
    switchTo("template.html")
}

let setText = function(text) {
    document.getElementById("text").innerHTML = `You ${text}!`;
}

let checkWhich = function() {
    what = localStorage.getItem("what")
    switch(what) {
        case "win": 
            playSound(`sound/${what}.mp3`);
            setText(what);
            break;
        case "tie":
            playSound(`sound/${what}.mp3`);
            setText(what+"d");
            break;
        case "lose":
            playSound(`sound/${what}.mp3`);
            setText(what);
            break;
    }
}

let restart = function() {
    localStorage.clear()
    switchTo("index.html")
}