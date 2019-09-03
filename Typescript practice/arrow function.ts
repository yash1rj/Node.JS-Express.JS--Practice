// declaring an Array with 3 objects
const manufacturers = [{ id: 'Samsung', price: 15000 },
        { id: 'Microsoft', price: 20000 },
        { id: 'Apple', price: 40000  },
        { id: 'Micromax', price: 10000  }
    ];

let test;

// Arrow function to populate the details of Array whose price is greater than 20000
function myFunction() {
  test = manufacturers.filter((manufacturer) => manufacturer.price >= 20000);
}

// self-invoking an arrow function
myFunction();

console.log('Details of Manufacturer array are : ');

// logic to populate the manufacturer array details based on id value
for (const item of test) {
    console.log(item.id);
}