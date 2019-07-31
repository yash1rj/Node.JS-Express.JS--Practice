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

// Async validation comes into play when we need to fetch some remote data, 
// or perform some other type of asynchronous task before persisting to the database. 
// For this we can use an async validator. Let’s have a look at one. 
// We’ll simulate asynchronous work with the setTimeout() function.

// To enable asynchronous validation, all we need to do is 
// add the isAsync property to the validate object and set it to true. 
// Then we can do our async work whether that be fetching remote data, 
// reading from the filesystem, or working with a database, 
// and the validation will still work properly.

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
            isAsync: true,
            validator: function (v, callback) {
                // Complete async task
                setTimeout(() => {
                    const result = v.length > 1;
                    callback(result);
                }, 2000);
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
