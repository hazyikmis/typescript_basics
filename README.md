# Installing TypeScript

> npm install -g typescript ts-node

Once its installed, check if its installed

> tsc --help

"tsc" is TypeScript compiler

# Running TypeScript files

METHOD 1:

> tsc index.ts

This "tsc" command converts index.ts to index.js, and then

> node index.js

METHOD 2:

> ts-node index.ts

This "ts-node" command automatically converts ts file to js and executes

# Metadata on JS Objects

> checkout the metadata.ts

```
//experimental options enabled to escape from errors in tsconfig.json file
//"npm init -y", npm installed, package.json created in order to install "reflect-metadata" npm pack
import 'reflect-metadata';

const plane = {
  color: 'red',
};

Reflect.defineMetadata('note', 'hi there', plane);
//Yo can think about Reflect.defineMetadata as below: (analogy)
//the code above adds hidden object/attribute to plane object, but its not seen and accessible directly
// const plane = {
//   color: 'red',
//   note: 'hi there'
// };
Reflect.defineMetadata('height', 10, plane);

console.log(plane); //{ color: 'red' } //no clue "note: 'hi there'" and/or "height: 10" added to plane

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);

console.log(note, height); //hi there, 10

//ITS ALSO POSSIBLE TO ADD "metadata" TO "color"PROPERTY OF "plane"
Reflect.defineMetadata('noteColor', 'goodbye', plane, 'color');
const colorNote = Reflect.getMetadata('noteColor', plane, 'color');
console.log(colorNote);
```

THIS IS THE REAL EXAMPLE OF USAGE OF DECORATORS & METADATA ON EXPRESS APP

> checkout the metadata4.ts

```
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

//when defining a decorator for a class, "target" parameter should be constructor of that class, (or typeof class = same meaning)
//this decorators (on class level) might be called "controllers", and help us to iterate all defined metadata(s) in the class
function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key); //for example, key is "fly" object/function
    const middleware = Reflect.getMetadata('middleware', target.prototype, key); //for example, key is "fly" object/function
    //router.get(path, target.prototype[key]);  //we need to import/define route, this is just an example
    router.get(path, middleware, target.prototype[key]); //we need to import/define route, this is just an example
  }
}
```
