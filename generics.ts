//Two classes are different but identical in nature
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

//GENERIC CLASS: we can use the class below for the 2 classes above!!!
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

//usage of Generic Classes
//1-ok
const arr1 = new ArrayOfAnything<string>(['aaa', 'bb', 'c']);
//2-ok
const arr2 = new ArrayOfAnything(['aaa', 'bb', 'c']); //ATTENTION: WITHOUT <T>, TypeScript automatically detects type of arr2 (type inference!)

//Example of generics with functions
//Here are 2 functions with code duplicates
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//solution (better approach)
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['aaa', 'bb', 'c']);
printAnything<number>([1, 7, 3, 6]);

printAnything(['aaa', 'bb', 'c']); //type inference (without T)
printAnything([1, 7, 3, 6]); //type inference (without T)

//Constraints about Generics

class Car implements Printable {
  print() {
    console.log('I am a car.');
  }
}

class House implements Printable {
  print() {
    console.log('I am a house.');
  }
}

/*
function printCarsOrHouses<T>(arr: T[]): void {
  for (let i=0; i < arr.length; i++) {
    arr[i].print()
  }
}
*/
//Problem with the case above is THERE IS NO GUARANTEE THAT  type "T" HAS AN "print" method
//Because of that, we define a interface

interface Printable {
  print(): void;
}

//ATTENTION: NOT "implements", "extends"
function printCarsOrHouses<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

//printCarsOrHouses([1, 3, 7, 10]);  //ERROR! type "number" does not satisfy the requirement of "print" method (numbers do not have print methods)
printCarsOrHouses([new House(), new House(), new Car()]); //ATTENTION: We can send different types implements/extends Printable
printCarsOrHouses<House>([new House(), new House()]);
printCarsOrHouses<Car>([new Car(), new Car()]);
