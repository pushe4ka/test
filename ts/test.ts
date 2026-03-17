import * as readline from 'readline';
import {createCircle, createRectangle, createSquare} from "./functions";

export function main() {
    let lines: string[] = [];
    //map for shapes
    let shapesMap = new Map<string, Function>([
        ["Square", createSquare],
        ["Rectangle", createRectangle],
        ["Circle", createCircle]
    ]);

    const rl = readline.createInterface({
        input: process.stdin, //standard input
        output: process.stdout //standard output
    });

    console.log("Please enter your data about different geometrical 2D shapes (Ctrl + D to finish):",);

    //if press Enter add line
    rl.on("line", (line: string) => {
        if (line.trim().length !== 0)
            lines.push(line);
    });

    rl.on("close", () => {
        if (lines.length === 0 ){
            console.log("You do not write anything");
        }
        //iterates all lines
        for (const line of lines) {
            let params = line.split(" ")
            let func = shapesMap.get(params[0])
            let numbers: number[] = []
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
            if (res === null){
                console.log(`Params for ${params[0]} are incorrect`)
                continue;
            }
            console.log(`${params[0]} Perimeter ${res[0]} Area ${res[1]}`);
        }

    });
}

/*
Square TopRight 1 1 Side 1
Rectangle TopRight 2 2 BottomLeft 1 1
Circle Center 1 1 Radius 2
*/
