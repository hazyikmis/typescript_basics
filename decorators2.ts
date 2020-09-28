//For decorator code in here, tsconfig.json file added and
//experimental options enabled to escape from errors

class Bot {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  /*
  //@logError
  @logError('Oops, bot was sunk in the ocean!')
  pilot(): void {
    throw new Error('');
    //console.log('swish');
  }
*/

  //pilot(@parameterDecorator speed: string): void {
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator wind: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('swiiiiish');
    }
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
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
  console.log(key);
  console.log(target[key]); //undefined; if @testDecorator is before "color: string = 'red';" line
  console.log(target.color); //undefined; if @testDecorator is before "color: string = 'red';" line
  //undefined because, "target" is prototype of the class, and prototypes in JS only stores methods, not attributes
}

//new Bot().pilot();
