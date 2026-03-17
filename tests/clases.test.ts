import {Rectangle, Square} from "../ts/classes";
import {Circle} from "../ts/classes";
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';


describe("Rectangle", function() {
    describe("width", function() {
        it('should return correct width', () => {
            const rectangle = new Rectangle(2, 2, 3,3)
            assert.equal(rectangle.width(), 1);
        });

        it ('should return correct height', () => {
            const rectangle = new Rectangle(2, 2, 3,3)
            assert.equal(rectangle.height(), 1);
        })

        it ('should return correct perimeter', () => {
            const rectangle = new Rectangle(2, 2, 3,3)
            assert.equal(rectangle.calculatePerimeter(), 4);
        })

        it ('should return correct area', () => {
            const rectangle = new Rectangle(2, 2, 3,3)
            assert.equal(rectangle.calculateArea(), 1);
        })
    })

    describe("circle", function() {
        it ('should return correct perimeter', () => {
            const circle = new Circle(2, 2, 2)
            assert.equal(circle.calculatePerimeter(), 12.57);
        })

        it ('should return correct area', () => {
            const circle = new Circle(2, 2, 2)
            assert.equal(circle.calculateArea(), 12.57);
        })
    })

    describe("square", function() {
        it ('should return correct perimeter', () => {
            const square = new Square(2, 2, 3)
            assert.equal(square.calculatePerimeter(), 12);
        })

        it ('should return correct area', () => {
            const square = new Square(2, 2, 3)
            assert.equal(square.calculateArea(), 9);
        })
    })
})