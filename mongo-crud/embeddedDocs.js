// Embedded Documents In MongoDB
// Now we want to see how to embed a document within another document 
// instead of using the reference approach. In the section above, 
// we had a game document that made a reference to a separate publisher document. 
// Now, we are going to change the code so that when a game document 
// is saved, we will also embed a publisher document at the same time. 
// What you can see below is that we are now embedding the publisherSchema 
// right inside of the gameSchema.

const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/mongo-games', { useNewUrlParser: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

// Publisher Schema
const publisherSchema = new mongoose.Schema({
    companyName: String,
    firstParty: Boolean,
    website: String
})
 
// Publisher Model
const Publisher = mongoose.model('Publisher', publisherSchema);
 
// Game Schema
const gameSchema = new mongoose.Schema({
    title: String,
    publisher: publisherSchema
})
 
// Game Model
const Game = mongoose.model('Game', gameSchema);

async function createGame(title, publisher) {
    const game = new Game({
        title,
        publisher
    });
 
    const result = await game.save();
    console.log(result);
}

/*
createGame('Rayman', new Publisher({ 
    companyName: 'Ubisoft', 
    firstParty: false, 
    website: 'https://www.ubisoft.com/'
}));
*/

// Querying(Read) Documents in MongoDB
async function getGames() {
    const games = await Game.find();
    console.log(games);
}

getGames();

// How to update the publisher, but it is embedded in a game. 
// How can we do that? You would have to find the game first, 
// then update the publisher within the game. Last, you would save the game.

async function updatePublisher(gameId) {
    const game = await Game.findById(gameId);
    game.publisher.companyName = 'Epic Games';
    game.publisher.website = 'https://epicgames.com/';
    const result = await game.save();
    console.log(result);
}
 
// updatePublisher('5d42c5cd7c4e831894981186');

// It is also possible to update a sub document directly. Here is how to do that.
async function updatePublisher(gameId) {
    const game = await Game.update({ _id: gameId }, {
        $set: {
            'publisher.companyName': 'Bethesda Softworks',
            'publisher.website': 'https://bethesda.net/'
        }
    });

    const result = await Game.findById(gameId);
    console.log(result);
}
 
// updatePublisher('5d42c5cd7c4e831894981186');

// Removing a sub document with unset
// To remove a sub document you can use unset like so.

async function updatePublisher(gameId) {
    const game = await Game.update({ _id: gameId }, {
        $unset: {
            'publisher': ''
        }
    });

    const result = await Game.findById(gameId);
    console.log(result);
}
 
// updatePublisher('5d42c5cd7c4e831894981186');

/*
Here are some things to remember about sub documents:
    You can enforce validation on Sub Documents.
    You can only save a Sub Document in the context of the Parent Document.
    You can not save a Sub Document on it’s own.
*/
