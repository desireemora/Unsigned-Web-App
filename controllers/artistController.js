//Handles errors without writing try/catch blocks
const asyncHandler = require("express-async-handler");

const Artist = require("../models/artistModel");

//@desc Get all artists
//@route GET /api/artists
//@access public
const getArtists = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Get all artists." });
});

//@desc Create new artist
//@route POST /api/artists
//@access public
const createArtist = asyncHandler(async(req, res) => {
    console.log("The request body is: ", req.body);
    const {name,yearEst} = req.body;

    if(!name || !yearEst){
        res.status(400)
        throw new Error("All fields are mandatory!");
    }

    res.status(201).json({ message: "Create new artists." });
});

//@desc Get artist by id
//@route POST /api/artists/:id
//@access public
const getArtist = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Get artist for ${req.params.id}` });
});

//@desc Update artist by id
//@route PUT /api/artists/:id
//@access public
const updateArtist = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update artist for ${req.params.id}` });
});

//@desc Delete artist by id
//@route DELETE /api/artists/:id
//@access public
const deleteArtist = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update artist for ${req.params.id}` });
});

module.exports = { 
    getArtists, 
    getArtist, 
    createArtist, 
    updateArtist, 
    deleteArtist 
};