var canvas = document.getElementById("canvas"); // finds the HTML element of canvas
var ctx = canvas.getContext("2d"); // what we will draw onto (could call this anything I like, context docs call it ctx)
var balls = new Array();

// on click function that takes the x and y coordinate of the mouse click
canvas.addEventListener("click", function (e) {
  balls.push(new Ball(e.clientX, e.clientY));
});

function reDrawLoop() {
  let height = document.documentElement.clientHeight;
  let width = document.documentElement.clientWidth;
  ctx.canvas.height = height; // resizing the canvas properly so that the images are not skewed
  ctx.canvas.width = width;

  balls.forEach((ball) => {
    ball.draw();
    ball.updatePosition(width, height);
  });

  window.requestAnimationFrame(reDrawLoop); // Tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.
}

reDrawLoop();
