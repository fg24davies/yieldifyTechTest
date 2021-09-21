const GRAVITY = 0.2; // assuming gravity same for all sizes of ball

class Ball {
  constructor(x, y) {
    this.xCoord = x;
    this.yCoord = y;
    this.direction = Math.random() * Math.PI * 2; // random direction in ANGLE start point, will use this to get the cosine and sine for x and y
    this.radius = Math.floor(Math.random() * 36 + 15); // random size ball between 50 and 15px
    this.color = "#" + Math.floor(Math.random() * 16777215).toString(16); // creating a random colour
    this.speed = Math.floor(Math.random() * 9 + 4); // random speed chosen by me
    this.velocityX = this.speed * Math.cos(this.direction);
    this.velocityY = this.speed * Math.sin(this.direction);
    //this.gravity = 0.2; // affects y axis
    this.inelasticCollision = 0.75; // affects y and x axis
    this.groundFriction = 0.1; // affects x axis
  }

  draw() {
    ctx.beginPath(); // always need this to initiate drawing path for drawing
    ctx.arc(this.xCoord, this.yCoord, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill(); // need this line to fill the shape with a solid color
  }

  // update position of ball
  updatePosition(width, height) {
    this.xCoord += this.velocityX;
    this.yCoord += this.velocityY;
    this.gravity();
    this.collision(width, height);
    this.stop();
  }

  // apply acceleration/decceleration due to gravity
  gravity() {
    this.velocityY += GRAVITY;
  }

  collision(width, height) {
    if (
      this.xCoord + this.velocityX + this.radius > width ||
      this.xCoord + this.velocityX - this.radius < 0
    ) {
      this.velocityX *= -this.inelasticCollision;
    }

    // if the ball hits the floor or ceiling:
    if (
      this.yCoord + this.velocityY + this.radius > height ||
      this.yCoord + this.velocityY - this.radius < 0
    ) {
      this.velocityY *= -this.inelasticCollision;

      // apply ground friction
      this.friction();
    }
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

  stop() {
    // stop ball bouncing
    if (this.velocityY < 0 && this.velocityY > -0.7) {
      this.velocityY = 0;
    }
    // stop ball 'rolling' on x axis
    if (Math.abs(this.velocityX) < 0.1) {
      this.velocityX = 0;
    }
  }
}
