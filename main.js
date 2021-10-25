 left_wrist_x = 0;
 right_wrist_x = 0;
 difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,450);
    canvas.position(550,150);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("the model is initialized");
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x-right_wrist_x);
        console.log("leftWristX = " + left_wrist_x + " rightWristX = "+ right_wrist_x + " difference = " + difference);
    }
}

function draw() {
    background('#FFFF00');
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
    textSize(difference);
    fill('yellow');
    text('Peter', 50, 400);
}