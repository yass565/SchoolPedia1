'use strict'
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const CountrySchema=new Schema(
    {
        nomPays: String,
        resumePays: String,
        imagePays: String,
        etablissements: [{
            acronyme: String,
            nomEtablissement: String,
            villes: [String],
            status: String,
            logoUrl: String,
            imageUrl: String,
            presentation: String,
            admission: String,
            frais: String,
            filieres: [String]
        }]
    }
);

module.exports=mongoose.model('Countries', CountrySchema);
