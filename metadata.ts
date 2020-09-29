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
