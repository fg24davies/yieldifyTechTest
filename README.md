# Bouncing Balls for Yieldify Tech Test

### Features/Requirements:

- [x] When the user clicks on the page, a 'ball' (circle) is fired from the clicked position.
- [x] The ball is fired at a random speed and angle.
- [x] The user can click multiple times for multiple balls to appear and bounce at the same time.
- [x] Ball follows the law of gravity.
- [x] Collisions between balls and the floor/walls are inelastic.
- [x] Ball comes to a stop on the floor.

#### Extras:
- [x] Random size ball
- [x] Random color

### Guidelines:

- Use any combination of web technologies to complete the task.
- Submit in a format that is easy for us to run / inspect from the browser.
- Your code should be written as if it were going to be deployed today i.e. using standard technologies commonly supported by most current browsers.
- You will be evaluated both on your implementation choices and the quality of your code; so please ensure code is well structured, extensible, testable, readable, commented etc.
- All code related to the physics of the ball should be authored by the applicant: do not use game engines, physics engines or other third party libraries to animate the balls.
- Any 3rd party code (at all) should be clearly attributed.

### How to run the program

- Hosted on Heroku: https://yieldify-tech-test.herokuapp.com/
- Just click to play!

### Technologies:

- Node.js project with HTML and CSS
- Using Express.js as a server to be able to host on Heroku
- Jest installed but no tests yet
- Integrated with Travis CI showing build status below

[![Build Status](https://app.travis-ci.com/fg24davies/yieldifyTechTest.svg?branch=main)](https://app.travis-ci.com/fg24davies/yieldifyTechTest)

### Small update post submission
 - Removed unnecessary route that I created for testing server set up
