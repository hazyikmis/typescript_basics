const today = new Date();
today.getMonth();

const person = {
  age: 20,
};

class Color {
  name: string;
}

const red = new Color();
red.name;

// variables
const apples: number = 5;
let grapes: number = 15;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// arrays
let colors: string[] = ["blue", "green", "blue"];
let myNums: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes
class CarClass {}
let car1: CarClass = new CarClass();

// object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
// const logNumber = (i) => {
//   console.log(i);
// }

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1
const json = '{"x": 10, "y": 20}';
//const coordinates = JSON.parse(json);
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x:10, y:20}

// 2

let words = ["red", "blue", "green"];
//let foundWord;
let foundWord = false; // type inference

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3

let numbers = [-10, -1, 12];
//let numberAboveZero = false;
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
