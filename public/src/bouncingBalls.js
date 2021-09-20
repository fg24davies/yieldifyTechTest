var canvas = document.getElementById("canvas"); //takes the HTML canvas element
var ctx = canvas.getContext("2d"); // the elements context - what we will draw onto (could call this anything like context docs call it ctx)
var raf;

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = Math.random() * Math.PI * 2; // random direction in ANGLE start point, will use this to get the cosine and sine for x and y
    this.radius = Math.floor(Math.random() * 36 + 15); // random size ball between 50 and 15px
    this.color = "#" + Math.floor(Math.random() * 16777215).toString(16); // creating a random colour
    this.speed = Math.floor(Math.random() * 9 + 4); // random speed chosen by me
    this.velocityX = this.speed * Math.cos(this.direction);
    this.velocityY = this.speed * Math.sin(this.direction);
    this.gravity = 0.2; // affects y axis
    this.inelasticCollision = 0.75; // affects y and x axis
    this.groundFriction = 0.1; // affects x axis
  }

  draw() {
    ctx.beginPath(); // always need this to initiate drawing path for drawing
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill(); // need this line to fill the shape with a solid color
  }

  // update position of ball
  updatePosition(width, height) {
    this.x += this.velocityX;
    this.y += this.velocityY;

    // apply gravitational effect
    this.velocityY += this.gravity;

    // if side of screens "walls" are hit:
    if (
      this.x + this.velocityX + this.radius > width ||
      this.x + this.velocityX - this.radius < 0
    ) {
      this.velocityX *= -this.inelasticCollision; // opposite direction now
    }

    //Ball hits the floor or ceiling
    if (
      this.y + this.velocityY + this.radius > height ||
      this.y + this.velocityY - this.radius < 0
    ) {
      // bounce ball
      this.velocityY *= -this.inelasticCollision;

      // stop ball bouncing
      if (this.velocityY < 0 && this.velocityY > -0.7) {
        this.velocityY = 0;
      }
      //do this otherwise ball never stops on xaxis
      if (Math.abs(this.velocityX) < 0.1) {
        this.velocityX = 0;
      }

      //apply ground friction
      this.friction();
    }
    // console.log("x velocity", this.velocityX);
    // console.log("y velocity", this.velocityY);
  }

  // effect of friction with 'floor' if ball rolling on the bottom of the canvas
  friction() {
    if (this.velocityX > 0) {
      this.velocityX -= this.groundFriction; // take away to bring closer to 0
    }
    if (this.velocityX < 0) {
      this.velocityX += this.groundFriction; // add to bring closer to 0
    }
  }
}

var balls = new Array();

// for (let index = 0; index < 50; index++) {
//   balls.push(new Ball(500, 500));
// }

//const ball = new Ball(100, 100);
// const ball = new Ball(100, 100);
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let height = document.documentElement.clientHeight;
  let width = document.documentElement.clientWidth;
  raf = window.requestAnimationFrame(loop); // resizing the canvas properly so that the images are not skewed on it Tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.
  ctx.canvas.height = height;
  ctx.canvas.width = width;

  // ball.draw();
  //ball.updatePosition(width, height);
  for (let index = 0; index < balls.length; index++) {
    let ball = balls[index];
    ball.draw();
    ball.updatePosition(width, height);
    //balls.push(new Ball(500, 500));
  }
}

canvas.addEventListener("click", function (e) {
  const ball = new Ball(e.clientX, e.clientY);
  balls.push(ball);
  console.log("x coord", e.clientX);
  console.log("y coord", e.clientY);
});

loop();
