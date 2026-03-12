"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSquare = createSquare;
exports.createRectangle = createRectangle;
exports.createCircle = createCircle;
const classes_1 = require("./classes");
function createSquare(params) {
    if (params.length != 3) {
        return null;
    }
    //2-nd coordinate for rectangle
    let x2 = params[0] + params[2];
    let y2 = params[1] + params[2];
    /*const square = new Square(params[0], params[1], params[2]);
    let p = square.calculatePerimeter()
    let a =square.calculateArea()*/
    const rectangle = new classes_1.Rectangle(params[0], params[1], x2, y2);
    let p = rectangle.calculatePerimeter();
    let a = rectangle.calculateArea();
    return [p, a];
}
function createRectangle(params) {
    if (params.length != 4) {
        return null;
    }
    const rectangle = new classes_1.Rectangle(params[0], params[1], params[2], params[3]);
    let p = rectangle.calculatePerimeter();
    let a = rectangle.calculateArea();
    return [p, a];
}
function createCircle(params) {
    if (params.length != 3) {
        return null;
    }
    const circle = new classes_1.Circle(params[0], params[1], params[2]);
    let p = circle.calculatePerimeter();
    let a = circle.calculateArea();
    return [p, a];
}
