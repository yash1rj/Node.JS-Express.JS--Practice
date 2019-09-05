// declaring Generic function named printData
function printData<T>( data: T): T {
    return data;
    }

// variable declaration to access Generic function
const stringData: string = printData<string>('Hello Generics');

// line to populate the result of Generic function on console.
console.log('String data ' + stringData);