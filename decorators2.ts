//For decorator code in here, tsconfig.json file added and
//experimental options enabled to escape from errors

class Bot {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  //@logError
  @logError('Oops, bot was sunk in the ocean!')
  pilot(): void {
    throw new Error('');
    //console.log('swish');
  }
}

/*
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log('Oops, bot was sunk!');
    }
  };
}
*/

function logError(errMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        //console.log('Oops, bot was sunk!');
        console.log(errMessage);
      }
    };
  };
}

//WE CANNOT READ THE PROPERTY OF THE INSTANCE OF A CLASS IN DECORATORS!!!
function testDecorator(target: any, key: string) {
  //console.log(target);
  //console.log(key);
  console.log(target[key]); //undefined
  console.log(target.color); //undefined
  //undefined because, "target" is prototype of the class, and prototypes in JS only stores methods, not attributes
}

new Bot().pilot();
