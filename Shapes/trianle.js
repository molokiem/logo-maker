const Shape = require("./shapes");

class Triangle extends Shape {
  render() {
    return `<svg height="300" width="300" xmlns-"http://www.w3.org/2000/svg>
       <polygon points="150,0 0,300 300,300" fill="{this.backgroundColor}"/>
       <text x="25%" y="75%" fill="${this.textColor}" font-size="30">${this.text}</text>
       </svg>`;
  }
}

module.exports = Triangle;
