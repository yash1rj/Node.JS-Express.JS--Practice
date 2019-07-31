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

// Here we will modify the validation for tags such that a user must provide more than one.
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
        validate: {
            validator: function (v) {
                return v.length > 1
            },
            message: 'You must provide more than 1 tag.'
        }
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

const Game = mongoose.model('Game', gameSchema);

async function saveGame() {
    const game = new Game({
        title: "Pacman",
        publisher: "Nintendo",
        tags: ["arcade"],
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
