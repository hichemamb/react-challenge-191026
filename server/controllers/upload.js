const express = require('express');
const app = express();
const path = require('path');

exports.setPicture = async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "picture") is used to retrieve the uploaded file
    let {picture} = req.files;
    // Use the mv() method to place the file somewhere on your server
    picture.mv(`${path.resolve(__dirname,'../..')+ '/public/uploads/' + picture.name}`, function (err) {
        if (err)
            return res.status(500).send(err);
        res.json({fileName: picture.name, filePath:`/uploads/${picture.name}`});
    });
};