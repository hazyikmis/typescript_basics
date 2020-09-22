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
