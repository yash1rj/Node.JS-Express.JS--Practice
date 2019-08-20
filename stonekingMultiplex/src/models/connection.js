const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/MultiplexDB', { useNewUrlParser: true })
    .catch((error) => {
        let err = new Error("Could not connect to Database")
        err.status = 500;
        throw err;
    })

const schema = {
    "movieId": {
        required: [true, 'Required field'],
        type: Number,
        unique: true
    },
    "movieName": {
        required: [true, 'Required field'],
        type: String
    },
    "language": {
        required: [true, 'Required field'],
        match: [/^[A-Za-z]{3,8}$/, 'Please enter only alphabets'],
        type: String
    },
    "showDetails": {
        type: [
            {
                "showId": {
                    required: [true, 'Required field'],
                    type: Number
                },
                "movieId": {
                    required: [true, 'Required field'],
                    type: Number
                },
                "fare": {
                    required: [true, 'Required field'],
                    type: Number
                },
                "availableSeats": {
                    required: [true, 'Required field'],
                    type: Number
                },
                "showDate": {
                    required: [true, 'Required field'],
                    type: Date,
                    validate: [(showDate) => new Date(showDate) >= new Date(), 'Date should be greater than today']

                }
            }
        ],
        default: []
    },
    "bookings": {
        type: [
            {
                "bookingId": {
                    required: [true, 'Required field'],
                    type: Number
                },
                "customerName": {
                    type: String,
                    default: "New User"
                },
                "bookingCost": {
                    required: [true, 'Required field'],
                    type: Number
                },
                "showId": {
                    required: [true, 'Required field'],
                    type: Number
                },
                "noOfTickets": {
                    type: Number,
                    min: [1, 'Minimum 1 ticket'],
                },
                "bookedAt": {
                    type: Date,
                    default: new Date().toLocaleDateString()
                }

            }
        ],
        default: []
    }
}

let movieSchema = mongoose.Schema(schema, { collection: 'Movie', timestamps: true });
exports.movieModel= mongoose.model("Movie",movieSchema );