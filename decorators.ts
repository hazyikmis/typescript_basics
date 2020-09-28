//For decorator code in here, tsconfig.json file added and
//experimental options enabled to escape from errors

class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log('swish');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target:', target);
  console.log('Key:', key);
}

//testDecorator(Boat.prototype, 'pilot'); //this line same effect with the "@testDecorator"
