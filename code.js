function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.js(video, modelLoaded);
    posenet.on('poses', gotPoses);

    

}
 
function draw()
{
    background('');
}

function modelLoaded()
{
    console.log('Posenet is Initialized!')
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results)
    }
}
