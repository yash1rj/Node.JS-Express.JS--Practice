const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
 
mongoose.connect('mongodb://localhost/mongo-games', { useNewUrlParser: true })
    .then(() => {
        console.log('You are now connected to Mongo!')
    })
    .catch((err) => {
        console.error('Something went wrong', err)
    })

// DB Schema
const gameSchema = new mongoose.Schema({
    title: String,
    publisher: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    onSale: Boolean,
    price: Number
});

/*
gameSchema -> Defines the shape of game documents in MongoDB
new mongoose.Schema({}) -> Creates a new instance of the Mongoose Schema class 
where an object is passed in.
title: String -> Each game needs a title, which is a string value.
publisher: String -> Each game also has a publisher, also a string value.
tags: [String] -> We can assign multiple tags to a game, each being a string.
date: { type: Date, default: Date.now } -> We want to include a date value 
when inserting a game.
onSale: Boolean -> Is the game currently on sale? Yes or no (true or false) 
represented by a Boolean.
price: Number -> Finally, each game has a price – represented by a number.
*/

// A Model in MongoDB is an Instance of the given Schema. 
// It’s the same idea as creating a new Object from a Class in Object Oriented Programming. 
// Here is how we create a Model.
const Game = mongoose.model('Game', gameSchema);

/*
The first argument is the singular name of the collection your model is for. 
Mongoose automatically looks for the plural version of your model name by convention. 
Therefore, in the code above, the model ‘Game’ is for the ‘games’ collection in the database. 
The second argument to the model() method is the schema that defines the shape of documents 
in this Collection. This gives us a new Game class in our application. 
This is why in the line of code above, we are assigning the result of the call 
to mongoose.model() to that Game constant. It is capitalized because what is stored 
here is a Class, not an object.
*/

// Creating a new instance of the Game class and passing an object during instantiation.
// Saving(Create) a Document In MongoDB
async function saveGame() {
    const game = new Game({
        title: "Prince of Persia: Warrior Within",
        publisher: "Ubisoft",
        tags: ["adventure", "action"],
        onSale: false,
        price: 49.99
    });

    const result = await game.save();
    console.log(result);
}

// saveGame();

// Insert many documents at once
async function saveGames() {
    const gamesArr = [ 
        { 
            tags: [ 'adventure', 'action' ],
            title: 'The Legend of Zelda: Breath of the Wild',
            publisher: 'Nintendo',    onSale: false,
            price: 59.99
        },
        { 
            tags: [ 'adventure', 'action' ],
            title: 'Super Mario Odyssey',
            publisher: 'Nintendo',
            onSale: true,
            price: 45
        },
        {
            tags: [ 'racing', 'sports' ],
            title: 'Mario Kart 8 Deluxe',
            publisher: 'Nintendo',
            onSale: false,
            price: 59.99
        },
        { 
            tags: [ 'action', 'shooter' ],
            title: 'Splatoon 2',
            publisher: 'Nintendo',
            onSale: true,
            price: 35.99
        },
        { 
            tags: [ 'side scroller', 'platformer' ],
            title: 'Rayman Legends',
            publisher: 'Ubisoft',
            onSale: false,
            price: 49.99
        },
        { 
            tags: [ 'simulation', 'farming' ],
            title: 'Stardew Valley',
            publisher: 'Chucklefish',
            onSale: false,
            price: 19.99
        },
        { 
            tags: [ 'adventure', 'platformer' ],
            title: 'Shovel Knight: Treasure Trove',
            publisher: 'Yacht Club Games',
            onSale: true,
            price: 10.99
        } 
    ];

    const insertMany = await Game.insertMany(gamesArr);

    console.log(JSON.stringify(insertMany,'','\t'));
}

// saveGames();

// Querying(Read) Documents in MongoDB
async function getGames() {
    const games = await Game.find();
    console.log(games);
}

getGames();

// Passing a filter to find()
async function getGamesOnSale() {
    const games = await Game.find({
        onSale: true
    });
    console.log(games);
}

// getGamesOnSale();

// Adding a sort() to the query
async function getGamesOnSaleSorted() {
    const games = await Game
        .find({
            publisher: "Nintendo",
            onSale: true
        })
        .sort({
            price: 1
        });
    console.log(games);
}

// getGamesOnSaleSorted();

// Selecting only certain properties
async function getGamesOnSaleSortedSelected() {
    const games = await Game
        .find({
            publisher: "Nintendo",
            onSale: true
        })
        .sort({
            price: 1
        })
        .select({
            title: 1,
            price: 1
        })
    console.log(games);
}

// getGamesOnSaleSortedSelected();

// Comparison Query Operators
async function getGamesPriceLTSortedSelected() {
    const games = await Game
        .find({
            price: { $lt: 25 }
        })
        .sort({
            price: 1
        })
        .select({
            title: 1,
            price: 1
        })
    console.log(games);
}

// getGamesPriceLTSortedSelected();

async function getGamesPriceInSortedSelected() {
    const games = await Game
        .find({
            price: { $in: [19.99, 35.99, 59.99] }
        })
        .sort({
            price: 1
        })
        .select({
            title: 1,
            price: 1
        })
    console.log(games);
}

// getGamesPriceInSortedSelected();

async function getGamesPriceBetweenSortedSelected() {
    const games = await Game
        .find({
            price: { $gt: 10, $lt: 50 }
        })
        .sort({
            price: 1
        })
        .select({
            title: 1,
            price: 1
        })
    console.log(games);
}

// getGamesPriceBetweenSortedSelected();

// Logical Query Operators
async function getGamesORSortedSelected() {
    const games = await Game
        .find()
        .or([{ publisher: 'Nintendo' }, { onSale: true }])
        .sort({
            price: 1
        })
        .select({
            publisher: 1, 
            title: 1,
            price: 1
        })
    console.log(games);
}

// getGamesORSortedSelected();

// all games published by Nintendo, OR, all the games 
// that are on sale, AND, they must be less than 50 dollars.
async function getGamesOrAndSortedSelected() {
    const games = await Game
        .find()
        .or([{ publisher: 'Nintendo' }, { onSale: true }])
        .and([{ price: { $lt: 50 } }])
        .sort({
            price: 1
        })
        .select({
            publisher: 1, 
            title: 1,
            price: 1
        })
    console.log(games);
}

// getGamesOrAndSortedSelected();

// Updating Documents using Query First
async function updateGameQueryFirst(id) {
    const game = await Game.findById(id);
    if(!game) return;

    game.price = 100;

    const result = await game.save();
    console.log(result);
}

// updateGameQueryFirst("5d41359162bdc821ccdad3f2");

// Updating a Document using Update First
async function updateGameUpdateFirst(id) {
    const result = await Game.update({
        _id: id
    },
    {
        $set: {
            title: 'A Link Between Worlds',
            price: 55
        }
    });

    console.log(result);
}

// updateGameUpdateFirst("5d41359162bdc821ccdad3f2");

// If we want to see the document after it was updated, we can use .findByIdAndUpdate()
async function updateGameAndSee(id) {
    const result = await Game.findByIdAndUpdate({
        _id: id
    },
    {
        $set: {
            title: 'Prince of Persia: The Two Thrones',
            price: 35
        }
    },
    {
        new: true
    });

    console.log(result);
}

// updateGameAndSee("5d4133e0a5746318086a4d8d");

// Remove(Delete) Documents in MongoDB
async function deleteGame(id) {
    const result = await Game.deleteOne({ _id: id });
    console.log(result);
}

// deleteGame("5d41359162bdc821ccdad3f2");
