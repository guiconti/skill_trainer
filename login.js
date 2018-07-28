
const train = require('./train');
const CHARACTER_PER_MINUTE = 300;
const USERNAME_INPUT_POSITION = {
  x: 1800,
  y: 565
}
const CHECK_LOGIN = {
  x: 1700,
  y: 865
}
const ONE_MINUTE_IN_MS = 1000 * 60;
const CHARACTER_POSITION = 4;
const GREY_TEXT_COLOR = 'fa961b';

module.exports = (username, password, robot) => {
  return new Promise((resolve, reject) => {

    //  Login
    robot.moveMouseSmooth(USERNAME_INPUT_POSITION.x, USERNAME_INPUT_POSITION.y);
    robot.mouseClick();
    robot.typeStringDelayed(username, CHARACTER_PER_MINUTE);
    robot.keyTap('tab');
    robot.typeStringDelayed(password, CHARACTER_PER_MINUTE);
    robot.keyTap('enter');

    while(robot.getPixelColor(CHECK_LOGIN.x, CHECK_LOGIN.y) != GREY_TEXT_COLOR){
    }

    for (let i = 0; i < CHARACTER_POSITION + 1; i++) {
      robot.keyTap('down');
    }

    robot.keyTap('enter');

    //  TODO: Improve to check if logged in
    setTimeout(() => {
      return resolve();
    }, ONE_MINUTE_IN_MS);

  });
}


