// declaring a Tuple
let productAvailable: [string, boolean];

let productName;
let availability;

// assigning value to Tuple
productAvailable = ['Samsung Galaxy J7', true];

 // Adding new value to Tuple
productAvailable.push('Samsung Galaxy J5', false);

// logic to check product availability based on datatype of declared Tuple variable
for (const item of productAvailable) {
     if (typeof item === 'string') {
         productName = item;
     } else if (typeof item === 'boolean') {
         availability = item;
         if (availability === true) {
             console.log(`The product ${productName} is available`);
         } else if (availability === false) {
             console.log(`The product ${productName} is not available`);
         }
     }
}