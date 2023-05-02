const Circle = require("../Shapes/circle");
const Square = require("../Shapes/square");
const Triangle = require("../Shapes/triangle");

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
