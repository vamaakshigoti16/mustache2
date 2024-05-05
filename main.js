noseX=0;
noseY=0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/Bng40MM2/mustache.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill(10, 1, 1);
  stroke(10,1,1);
  circle(noseX, noseY, 20);
  image(mustache, noseX-13, noseY, 30, 30);
}