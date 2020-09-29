import 'reflect-metadata';

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

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
console.log(secret);
