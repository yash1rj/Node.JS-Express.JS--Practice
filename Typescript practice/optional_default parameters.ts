// declaring a function with optional parameter
function getMobileByManufacturer(manufacturer: string = 'Samsung', id?: number): string[] {

    let mobileList: string[];

   // logic to be evaluated if id parameter while invoking above declared function
    if (id) {
    if (id === 101) {
        mobileList = ['Moto G Play, 4th Gen', 'Moto Z Play with Style Mod'];
        return mobileList;
        }
    }

    // logic to return mobileList based on manufacturer category
    if (manufacturer === 'Samsung') {
          mobileList = [' Samsung Galaxy S6 Edge', ' Samsung Galaxy Note 7',
  ' Samsung Galaxy J7 SM-J700F'];
          return mobileList;
      } else if (manufacturer === 'Apple') {
            mobileList = [' Apple iPhone 5s', ' Apple iPhone 6s', ' Apple iPhone 7'];
            return mobileList;
      } else {
            mobileList = [' Nokia 105', ' Nokia 230 Dual Sim'];
            return mobileList;
      }

  }

  // statement to invoke function with optional parameter
console.log('The available mobile list : ' + getMobileByManufacturer('Apple'));

  // statement to invoke function with default parameter
console.log('The available mobile list : ' + getMobileByManufacturer(undefined, 101));