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

// In the snippet below, we are making the title of the game mandatory. 
// It is no longer optional. We can do this with the required property.
const gameSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true,
        minlength: 4,
        maxlength: 200
    },
    publisher: String,
    tags: {
        type: [String],
        required: true,
        enum: ['sports', 'racing', 'action', 'rpg']
    },
    date: {
        type: Date,
        default: Date.now
    },
    onSale: Boolean,
    price: {
        type: Number,
        required: function () { return this.onSale }
    }
});

// using a function with required to conditionally require something.
// In the schema above, we are saying that if the game is on sale, then the price is required.

// minlength and maxlength
// In addition to making a string required, we can also specify 
// the minimum length and maximum length it should be.

// enum validation
// When creating a game, we are assigning some tags to it. 
// Using enum validation, we can specify the available tags one could use. 
// Above we are saying that the tags for a game must be 
// any of sports, racing, action, or rpg.

// With our validation in place for the title of the game, 
// let’s try to save a game to the database without specifying a title.

const Game = mongoose.model('Game', gameSchema);

async function saveGame() {
    const game = new Game({
        title: "Pacman",
        publisher: "Ubisoft",
        tags: ["adventure", "action"],
        onSale: true,
        price: 29.99
    });

    try {
        const result = await game.save();
        console.log(result);
    }
    catch(e) {
        console.log(e.message);
    }
}

saveGame();
