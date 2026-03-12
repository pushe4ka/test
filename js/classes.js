"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Rectangle = void 0;
class Shape {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
/*export class Square extends Shape {
    constructor (x: number, y: number, public side: number) {
        super(x, y);
    }
    calculatePerimeter(): number {
        return 4 * this.side;
    }

    calculateArea(): number {
        return this.side**2;
    }
}*/
class Rectangle extends Shape {
    x2;
    y2;
    constructor(x, y, x2, y2) {
        super(x, y);
        this.x2 = x2;
        this.y2 = y2;
    }
    width() {
        return Math.abs(this.x - this.x2);
    }
    height() {
        return Math.abs(this.y - this.y2);
    }
    calculatePerimeter() {
        return 2 * (this.height() + this.width());
    }
    calculateArea() {
        return this.height() * this.width();
    }
}
exports.Rectangle = Rectangle;
class Circle extends Shape {
    r;
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }
    calculatePerimeter() {
        return Number((2 * Math.PI * this.r).toFixed(2));
    }
    calculateArea() {
        return Number((Math.PI * this.r ** 2).toFixed(2));
    }
}
exports.Circle = Circle;
