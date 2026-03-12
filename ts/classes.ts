abstract class Shape {
    constructor(public x: number, public y: number) {}
    abstract calculatePerimeter(): number;
    abstract calculateArea(): number;
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

export class Rectangle extends Shape {
    constructor (x: number, y: number, public x2: number, public y2: number) {
        super(x, y);
    }

    width() {
        return Math.abs(this.x - this.x2);
    }

    height(){
        return Math.abs(this.y - this.y2);
    }

    calculatePerimeter(): number {
        return 2 * (this.height() + this.width());
    }

    calculateArea(): number {
        return this.height() * this.width();
    }
}

export class Circle extends Shape{
    constructor (x: number, y: number, public r: number) {
        super(x, y);
    }
    calculatePerimeter(): number {
        return Number((2 * Math.PI * this.r).toFixed(2));
    }

    calculateArea(): number {
        return Number((Math.PI * this.r**2).toFixed(2));
    }
}