//For decorator code in here, tsconfig.json file added and
//experimental options enabled to escape from errors

class Bot {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error('');
    console.log('swish');
  }
}

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

new Bot().pilot();
