const robot = require('robotjs');
const login = require('./login');

const KEYBOARD_DELAY = 300;
const MOUSE_DELAY = 300;
const STATUE_POSITION = {
  x: 1630,
  y: 350
}

if (process.argv.length < 4) {
  return console.log('Please send username and password');
}

const username = process.argv[2];
const password = process.argv[3];

// Delay setup
robot.setKeyboardDelay(KEYBOARD_DELAY);
robot.setMouseDelay(MOUSE_DELAY);

login(username, password, robot)
  .then(() => {
    robot.moveMouseSmooth(STATUE_POSITION.x, STATUE_POSITION.y);
    robot.mouseClick('left');
  });