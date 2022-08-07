var express = require("express");
var router = express.Router();

let fanCurvePoints = {};
let constantSpeed = 0; //coresponds to the PWM pulse width , between 0-255
let mode = "constant"; // "constant" or "curve"

/* GET info. */
router.get("/current", function (req, res, next) {
  //should return the current fanRPM
  res.send("respond with a resource");
});

router.get("/setup", function (req, res, next) {
  //should return all the current setup
  res.send("respond with a resource");
});

/* POST fan info. */

/* PUT fan info. */

module.exports = router;
