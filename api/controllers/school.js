const School = require('../models/school');

exports.createSchool = (req, res, next) => {
   //Allowed nested routes
    if(!req.body.country) req.body.country=req.params.nomPays;
    const school = new School(req.body);
    school.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getOneSchool= (req, res, next) => {
    School.findOne({
        nomEtablissement: req.params.nomEtablissement
    }).then(
        (school) => {
            res.status(200).json(school);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifySchool = (req, res, next) => {
    const school = new School({
        _id: req.params.id,
        nom: req.body.nom,
        pays: req.body.pays,
        ville: req.body.ville,
        status: req.body.status,
        logoUrl: req.body.logoUrl,
        imageSchool: req.body.imageUrl,
        presentation: req.body.presentation,
        admission: req.body.admission,
        frais: req.body.frais
    });
    School.updateOne({_id: req.params.id}, school).then(
        () => {
            res.status(201).json({
                message: 'School updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.deleteSchool = (req, res, next) => {
    School.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getAllSchool = (req, res, next) => {
    School.find().then(
        (schools) => {
            res.status(200).json(schools);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
