/*
class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("beep");
  }
}

//extending classes
class Car extends Vehicle {
  //overwriting some methods
  drive(): void {
    console.log("vrooom");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();
*/

class Vehicle {
  //color: string = "red";

  /* 
//this section below is equal to...
  //color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }
// this section above is equal to the code below...
*/
  constructor(public color: string) {}
  //constructor(private color: string) {}  //also possible but color not accessible from outside

  public drive(): void {
    console.log("chugga chugga");
  }

  public honk(): void {
    console.log("beep");
  }

  //accessible by other methods in the same class and also by child classes
  protected speedUp(): void {
    console.log("vroooOOOM");
  }
}

class Car extends Vehicle {
  //color refers to the parent class' color
  constructor(public wheels: number, color: string) {
    super(color); //this calls the constructor of the parent
  }

  //public drive(): void {
  private driveMe(): void {
    console.log("vrooom");
  }

  startDrivingProcess(): void {
    //this.drive();  //chugga chugga
    this.driveMe(); //vrooom
    this.speedUp();
  }
}

const vehicle = new Vehicle("ORANGE");
vehicle.drive();
vehicle.honk();
console.log(vehicle.color);

//const car = new Car();  //throws error, because color not given!
const car = new Car(4, "BLUE");

//car.drive();
car.startDrivingProcess();
car.honk();
console.log(car.color);
