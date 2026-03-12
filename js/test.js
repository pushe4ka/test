"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const readline = __importStar(require("readline"));
const functions_1 = require("./functions");
function main() {
    let lines = [];
    //map for shapes
    let shapesMap = new Map([
        ["Square", functions_1.createSquare],
        ["Rectangle", functions_1.createRectangle],
        ["Circle", functions_1.createCircle]
    ]);
    const rl = readline.createInterface({
        input: process.stdin, //standard input
        output: process.stdout //standard output
    });
    console.log("Please enter your data about different geometrical 2D shapes (Ctrl + D to finish):");
    //if press Enter add line
    rl.on("line", (line) => {
        if (line.trim().length !== 0)
            lines.push(line);
    });
    rl.on("close", () => {
        if (lines.length === 0) {
            console.log("You do not write anything");
        }
        //iterates all lines
        for (const line of lines) {
            let params = line.split(" ");
            let func = shapesMap.get(params[0]);
            let numbers = [];
            // check if shape is correct
            if (!func) {
                console.log(`Unknown shape type: ${params[0]}`);
                continue;
            }
            //add number parameters to numbers[]
            for (let i = 1; i < params.length; i++) {
                if (Number(params[i]) || params[i] == "0") {
                    numbers.push(Number(params[i]));
                }
            }
            let res = func(numbers);
            //check if parameters for shape is correct
            if (res === null) {
                console.log(`Params for ${params[0]} are incorrect`);
                continue;
            }
            console.log(`${params[0]} Perimeter ${res[0]} Area ${res[1]}`);
        }
    });
}
