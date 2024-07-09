// "use strict";

const express = require("express");

const morgan = require("morgan");
const PORT = 8000;

const {
    getRandomePalette,
    getAllPalettes,
    getUserbyId,
    createUserMongo,
    saveGeneratedPalette,
    getSavedPalettes,
    savePaletteFromPicture
} = require("./handlers");

const {colorRecognize,
    } = require("./googleVisionApI")


express()
.use(morgan("tiny"))
.use(express.json({ limit: '10mb' }))
.use(express.static("public"))
.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE",
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

/* Endpoints */
.get("/api/randome-palette", getRandomePalette)
.get("/api/palettes", getAllPalettes)
.get("/api/users/:id", getUserbyId)
.get("/api/fetch-my-palettes/:id",getSavedPalettes)

.post("/api/user/create-user", createUserMongo)
.post("/api/color-recognize",colorRecognize)
.post("/api/save-palette-from-picture", savePaletteFromPicture)

.patch("/api/save-palette",saveGeneratedPalette)



// catch-all
.get("*", (req, res) => {
return res.status(404).json({ status: 404, message: "No endpoint found." })
})

.listen(PORT, () => console.log(`Listening on port ${PORT}`));
