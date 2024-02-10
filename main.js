traitor = 0;
goodforyou = 0;

function preload(){
    song = loadSound("Olivia_Rodrigo_-_traitor.mp3");
    song = loadSound("Olivia-Rodrigo-Good-4-U.mp3");
}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 400);
}