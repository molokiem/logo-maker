const Circle = require("../lib/circle");
const Square = require("../lib/square");
const Triangle = require("../lib/triangle");

function generate(data) {
  let shape = undefined;
  if (data.shape === "Circle") {
    shape = new Circle(data.background_color, data.text, data.text_color);
  } else if (data.shape === "Square") {
    shape = new Square(data.background_color, data.text, data.text_color);
  } else {
    shape = new Triangle(data.background_color, data.text, data.text_color);
  }
  return shape.render();
}

module.exports = generate;
