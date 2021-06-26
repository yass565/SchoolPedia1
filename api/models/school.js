const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    acronyme: String,
    nomEtablissement: String,
    villes: [String],
    status: String,
    logoUrl: String,
    imageUrl: String,
    presentation: String,
    admission: String,
    frais: String,
    filieres: [String],
});

module.exports = mongoose.model('Schools', schoolSchema);
