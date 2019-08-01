/*
Reference Based Relationships (Normalization)
In this approach let’s say we have two collections. 
One will be for publishers and another will be for games. 
So first we’ll have a publisher object like so.


let publisher = {
    companyName: 'Nintendo'
}


Then, we will have another collection to represent a game. 
So in the object here, we have a game that references the id of a publisher document.


let game = {
    publisher: 'id'
}


This is the reference approach. 
It feels similar to how things might be done in a relational database, but there is a difference. 
In MongoDB, this relationship is *not* enforced – unlike a relational 
database that enforces data integrity across relationships. 
Even though the game document has a reference to a publisher 
document via an id, in MongoDB there is no actual relationship between these two documents.

Embedded Documents Relationships (Denormalization)
The other approach to relationships is to embed a related document 
inside of another document. For example we can embed a publisher 
document inside of a game document.


let game = {
    publisher: {
        companyName: 'Nintendo'
    }
}


So which approach should you use? Well, Normalization is really a relational 
database type approach. If you are going to be focusing strictly on Normalization, 
a relational database might be the better option. MongoDB doesn’t support server-side 
foreign key relationships, normalization is often discouraged. 
It is more common to embed a child object within a parent objects if possible, 
since this increases performance and makes foreign keys unnecessary.

Normalization -> Better Consistency
Requires additional queries
Provides Consistency

Denormalization -> Better Performance
Can use a single query for related documents
Consistency can degrade over time

You may also use a combination of these two approaches in your application, 
but in general, you will embed a child object within a parent object if possible.
*/

const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/mongo-games', { useNewUrlParser: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

const Publisher = mongoose.model('Publisher', new mongoose.Schema({
    companyName: String,
    firstParty: Boolean,
    website: String
}));

/*
const Game = mongoose.model('Game', new mongoose.Schema({
    title: String
}));
*/

const Game = mongoose.model('Game', new mongoose.Schema({
    title: String,
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publisher'
    }
}));

async function createPublisher(companyName, firstParty, website) {
    const publisher = new Publisher({
        companyName,
        firstParty,
        website
    });
 
    const result = await publisher.save();
    console.log(result);
}

async function createGame(title, publisher) {
    const game = new Game({
        title,
        publisher
    });
 
    const result = await game.save();
    console.log(result);
}

// Now we want to query the database to see our games. 
// The query here says to find all games and select their title.
// We can also select the publisher by simply including it in the select portion of the query.
async function listGames() {
    const games = await Game
        .find()
        .populate('publisher', 'companyName -_id')
        .select('title publisher');
    
    // it would be better to see the actual data of the publisher rather 
    // than just the identifying id. We can do that with the populate() method.
    // To clean things up just a bit more, 
    // lets remove the _id from the output in the query by adding -_id.
    console.log(games);
}

// createPublisher('Nintendo', true, 'https://www.nintendo.com/');

	
// createGame('Super Smash Bros', '5d427636b8b0df0a90bccdf8');
// our goal was to create a new game in the database which is 
// associated with a publisher. It looks like all we got is the game 
// title for output here, the publisher appears to be missing.

// We can fix this by modifying our Game model to include a 
// publisher with it’s type set to mongoose.Schema.Types.ObjectId

// createGame('Super Smash Bros', '5d427636b8b0df0a90bccdf8');
// Now when we insert a game into the database, 
// we see both the title and publisher are displayed.

listGames();
