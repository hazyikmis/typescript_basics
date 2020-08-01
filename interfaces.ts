/*
const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
*/

//fixing annotations with interfaces

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

printVehicle(oldCivic);

//

interface VehicleWithSummary {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const printVehicle2 = (vehicle: VehicleWithSummary): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

const printVehicle3 = (vehicle: VehicleWithSummary): void => {
  console.log(vehicle.summary());
};

const oldCivic2 = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name} Year: ${this.year} Broken: ${this.broken} `;
  },
};

printVehicle2(oldCivic2);

//

interface Reportable {
  summary(): string;
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

const oldCivic3 = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name} Year: ${this.year} Broken: ${this.broken} `;
  },
};

const drink2 = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink contains ${this.sugar} grams of sugar.`;
  },
};

printSummary(oldCivic3);
printSummary(drink2);
