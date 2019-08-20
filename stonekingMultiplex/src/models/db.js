const mongoose = require('mongoose');
const movieModel = require('./connection').movieModel

var movie = {}

//Insert a single data
movie.addMovie = (movieObj) => {
    return movieModel.create(movieObj).then((insertedData) => {
        if (insertedData) {
            return insertedData
        }
        else {
            let err = new Error("Data not inserted")
            err.status = 500
            throw err;
        }
    })
}


//Retrieve all data
movie.find = () => {
    return movieModel.find().then((movieData) => {
        if(!movieData || movieData.length == 0) { return movieData }
        else {
            let err = new Error("No record found")
            err.status = 404
            throw err;
        }
    })
}


//Retrieve data based on MovieId
movie.getMovie = (movieId) => {
    return movieModel.findOne({ movieId: movieId }, { _id: 0, movieName: 1, language: 1 }).then((movieDetails) => {
        if (movieDetails) { return movieDetails }
        else {
            let err = new Error("No record found")
            err.status = 404
            throw err;
        }
    })
}


//Insert multiple data
movie.multipleInsert = (movieObj) => {

    return movieModel.insertMany(movieObj).then((insertedData) => {
        if (insertedData) {
            return insertedData
        }
        else {
            let err = new Error("Data not inserted")
            err.status = 500
            throw err;
        }
    })
}

//Update details
movie.addShows = (showObj) => {
    return movieModel.updateOne({ movieId: 2002 }, { $push: { showDetails: showObj } },{runValidators:true})
        .then((updatedData) => {
            if(updatedData.nModified==1) {
                return updatedData
            }
            else {
                let err = new Error("Data not updated")
                err.status = 500
                throw err;
            }
        })
}

//Delete details of a movie
movie.removeShow = (movie) => {
    return movieModel.deleteOne({ movieName: movie })
        .then((deletedData) => {
            if(deletedData.deletedCount==1) {
                return deletedData;
            }
            else {
                let err = new Error("Could not delete data")
                err.status = 500;
                throw err;
            }
        })
}


module.exports = movie;