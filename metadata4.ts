//THIS IS THE REAL EXAMPLE OF USAGE OF DECORATORS & METADATA ON EXPRESS APP
import 'reflect-metadata';

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrrr');
  }
}

function login(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);

//when defining a decorator for a class, "type" parameter should be constructor of that class, (or typeof class = same meaning)
//this decorators (on class level) might be called "controllers", and help us to iterate all defined metadata(s) in the class
function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key); //for example, key is "fly" object/function
    const middleware = Reflect.getMetadata('middleware', target.prototype, key); //for example, key is "fly" object/function
    //router.get(path, target.prototype[key]);  //we need to import/define route, this is just an example
    router.get(path, middleware, target.prototype[key]); //we need to import/define route, this is just an example
  }
}
