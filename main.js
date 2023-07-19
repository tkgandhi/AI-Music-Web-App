song_1 = "";
song_2 = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function setup() 
{
    canvas = createCanvas(600, 500);
    canvas.position(400, 175);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() 
{
    console.log("PoseNet is Initialized!");
}

function draw() 
{
    image(video, 0, 0, 600, 500);
}

function preload() 
{
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function gotPoses(results) 
{
    if (results.length > 0) {
        console.log(results);

        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("leftwristX = " + leftwristX + "leftwristY" + leftwristY);

        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("rightwristX = " + rightwristX + "rightwristY" + rightwristY);
    }

}