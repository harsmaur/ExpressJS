"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//setup babel with express js

var app = (0, _express["default"])();
var port = 3000;
app.get('/', function (req, res) {
  res.send("This is babel1142356");
});
app.listen(port, function () {
  console.log("Listening to port ".concat(port));
});