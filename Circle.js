//https://hackernoon.com/math-sin-and-math-cos-the-creative-coders-best-friend-597d69000644

//sin sections borrowed from above, as I slowly began to understand this concept.  The above article has some great other ideas as well!


//KNOWN ISSUES:
    //corner gap
    //not an issue, but weird: why can't I use this.diameter to define another property?

function Circle () {
    this.ball = {
            //sets direction
        direction: Math.round(random()) === 1 ? 'y' : 'x',
            //sets initial angle for sin to use
        angle: random(360),
        speed: random(0.2, 1.5),
        // speed_y: random(1),
        diameter: random(10, 50),
            //color only works with non-decimal in p5.  Must be set to HSBA
        color: color('hsba(' + Math.round(random(1, 360)) + ', 60%, 80%, .1)'),
             //if direction is y, set initial y to calculated.  Else, is random
        y: this.direction === 'y' ? this.calcSinLocation() : random((0 + 50), (height - 50)),
            //if direction is x, set initial x to calculated.  Else, is random
        x: this.direction === 'x' ? this.calcSinLocation() : random((0 + 50), width - 50),
    }
    this.update = () => {
        this.ball.angle += this.ball.speed;
            //radians is a p5.js function that converts degrees into radians
            //the first width / 2 sets the midpoint as the start.  
            //Math.sin... gives a multiplier between 1 and -1.  
            //((width / 2) - ball.diameter / 2) allows the multiplier to be multiplied by half the width, minus the radius
           
            //ES6 lets you use bracket notation to have a dynamic property name!
        this.ball[this.ball.direction] = this.calcSinLocation();
    }

    this.show = () => {
        
        fill(this.ball.color);

        circle(this.ball.x, this.ball.y, this.ball.diameter)
    }

    // this.fadeOut = () => {
    //    this.ball.color.setAlpha(0.1);
       
    //     // var timer = setInterval(function () {
    //     //     if (alpha <= 0.1) {
    //     //         console.log(alpha);
    //     //         clearInterval(timer);
    //     //         //remove element
    //     //         balls.pop();
    //     //     }
    //     //     //set opacity
    //     //     this.ball.color = Math.round(alpha * .8);
    //     // }, 50);
    // }
    this.fadeIn = () => {
        let c = this.ball.color;
        let op = 0.1; // initial opacity
        var timer = setInterval(function () {
            if (op > .9) {
                clearInterval(timer);
            }
            c.setAlpha(op);
            op += op * 0.1;
        }, 20);
    }

        //fades out
    this.fadeOut = () => {
        let c = this.ball.color;
        let op = alpha(c); // current opacity
        var timer = setInterval(function () {
            if (op < .1) {
                balls.pop();
                clearInterval(timer);
            }
            c.setAlpha(op);
            op -= op * 0.1;
        }, 20);
    }
        //utility function to return location given an angle
    this.calcSinLocation = () => {
        return width / 2 + Math.sin(radians(this.ball.angle)) * ((width / 2) - this.ball.diameter / 2);
    }
}