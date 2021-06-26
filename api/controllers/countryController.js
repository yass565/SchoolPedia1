'use strict';
const mongoose=require('mongoose'),
    Country=mongoose.model('Countries'),
    School=mongoose.model('Schools');
exports.list_all_countries=function (req, res){
    Country.find({}, function (err, country){
        if(err)
            res.send(err);
        res.json(country);
    })
}

exports.create_a_country= function(req, res) {
    const new_country = new Country(req.body);
    new_country.save(function(err, country) {
        if (err)
            res.send(err);
        res.json(country);
    });
};



exports.read_a_country = function(req, res) {
    Country.findById(req.params.countryId, function(err, country) {
        if (err)
            res.send(err);
        res.json(country);
    });
};

exports.readByNom=function (req, res){
    Country.findOne({nomPays: req.params.nomPays}, function (err, country){
        if(err)
            res.send(err);
        res.json(country);
    });
};

exports.create_a_countryBynom= function(req, res) {
    const new_country = new Country(req.body);
    new_country.save(function(err, country) {
        if (err)
            res.send(err);
        res.json(country);
    });
};

exports.update_a_country = function(req, res) {
    Country.findOneAndUpdate({_id: req.params.countryId}, req.body, {new: true}, function(err, country) {
        if (err)
            res.send(err);
        res.json(country);
    });
};

exports.delete_a_country = function(req, res) {


    Country.remove({
        _id: req.params.countryId
    }, function(err, country) {
        if (err)
            res.send(err);
        res.json({ message: 'Country successfully deleted' });
    });
};

exports.getSchoolsByCountryName=function (req, res){

    Country.findOne({
        nomPays: req.params.nomPays},
        function (err, country){
        if(err)
            res.send(err);
        res.json(country.etablissements);
    });
};

exports.addSchoolToCountry=function(req, res){
    Country.findOneAndUpdate({nomPays: req.params.nomPays},
        {$push: {etablissements: req.body}},
         function(err, country) {
        if (err)
            res.send(err);
        res.json(country);
    });
};
exports.read_a_schoolByName=function(req, res){
    Country.findOne({nomPays: req.params.nomPays,
        'etablissements.nomEtablissement': req.params.nomEtablissement},
        {'etablissements.$': 1},
        function (err, country){
        if(err)
            res.send(err);
        res.json(country.etablissements[0]);
    });
}

exports.delete_a_school=function(req, res){
    Country.findOneAndUpdate({nomPays: req.params.nomPays},
        {$pull: {etablissements: {_id: req.params.nomEtablissement}}},
        function(err, country) {
            if (err)
                res.send(err);
            res.json(country);
        });
}

