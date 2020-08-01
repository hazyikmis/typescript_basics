const carMakers = ["ford", "toyota", "renault"];

//const carsByMake = [["f150", "corolla", "camaro"], ["clio", "megane"]];
//const carsByMake = [["f150", "corolla", "camaro"]];

const carsByMake: string[][] = [];

// type inference
const myCar = carMakers[0];
const yourCar = carMakers.pop();

//prevent incompatible values
carMakers.push(100);

//help with map, reduce, forEach etc...
carMakers.map((car) => {
  return car.toUpperCase();
});

// flexible types
const importantDates = [new Date(), "2030-10-10"];
const importantDates2: (Date | string)[] = [new Date()];

importantDates2.push(new Date());
importantDates2.push("2025-12-12");
