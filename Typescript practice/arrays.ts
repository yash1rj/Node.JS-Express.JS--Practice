// declaring an array of any datatype
const  manufacturers: any[] = [{ id: 'Samsung', checked: false },
        { id: 'Motorola', checked: false },
        { id: 'Apple', checked: false },
        { id: 'Sony', checked: false }
    ];

console.log('Available Products are: ');

 // logic to populate the above declared array's id value
for (const item of manufacturers) {

     console.log(item.id);
}