import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  //@markFunction
  @markFunction(123)
  fly(): void {
    console.log('vrrrrr');
  }
}

// function markFunction(target: Plane, key: string) {
//   Reflect.defineMetadata('secret', 123, target, key);
// }

function markFunction(secretInfo: number) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);

//when defining a decorator for a class, "type" parameter should be constructor of that class, (or typeof class = same meaning)
//this decorators (on class level) might be called "controllers", and help us to iterate all defined metadata(s) in the class
function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key); //for example, key is "fly" object/function
    console.log(secret);
  }
}
