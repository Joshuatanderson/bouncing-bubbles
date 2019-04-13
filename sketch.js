new p5();

let balls = [];
let animationCount = 0;
let INITIAL_BALL_COUNT = 20;
let ADD_BALL_SPEED = 100;

    //sets color mode: DO THIS IN P5, OR SUFFER THE CONSEQUENCES!!!
    //YOU HAVE BEEN WARNED!
colorMode(HSB, 360, 360, 360, 1);

    //p5's init function
function setup () {
    createCanvas(600,600);
    noStroke();
    createBalls();
}

    //draws canvas
function draw () {
    background(51);
    
    if(animationCount % ADD_BALL_SPEED === 0){
        newBall();
    }
        //updates
    updateBalls();
        //ticks up animationCount
    animationCount++;
}

    //newBall creates a new ball, pushes it to balls, and removes the last item of balls
    //newBall is triggered at a certain interval, judged by animationCount hitting a threshold
newBall = () => {
        //add new ball
    balls.unshift(new Circle());
        //fade out && remove last ball
    balls[0].fadeIn();
        // check that more than one ball before removing
    if(balls.length > 1){
        balls[balls.length - 1].fadeOut();
    }
}

    //creates balls
createBalls = () => {
    for(let i = 0; i < INITIAL_BALL_COUNT; i++){
        balls.push(new Circle());
        balls[i].fadeIn();
    }
}

    //updates and shows balls
updateBalls = () => {
    for(let i = 0; i < balls.length; i++){
        let ball = balls[i];
        ball.update();
        ball.show();
    }
}

