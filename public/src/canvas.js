var canvas = document.getElementById("canvas"); //takes the HTML canvas element
var ctx = canvas.getContext("2d"); // the elements context - what we will draw onto (could call this anything like context docs call it ctx)
var balls = new Array();

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let height = document.documentElement.clientHeight;
  let width = document.documentElement.clientWidth;
  window.requestAnimationFrame(loop); // resizing the canvas properly so that the images are not skewed on it Tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.
  ctx.canvas.height = height;
  ctx.canvas.width = width;

  for (let index = 0; index < balls.length; index++) {
    let ball = balls[index];
    ball.draw();
    ball.updatePosition(width, height);
  }
}

canvas.addEventListener("click", function (e) {
  balls.push(new Ball(e.clientX, e.clientY));
});

loop();
