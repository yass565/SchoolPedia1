'use strict';
module.exports=function (app){
    const country=require('../controllers/countryController');
    const school=require('../controllers/school');
    app.route('/countries')
        .get(country.list_all_countries)
        .post(country.create_a_country);

    app.route('/countries/:countryId')
        .get(country.read_a_country)
        .put(country.update_a_country)
        .delete(country.delete_a_country);

    app.route('/country/:nomPays')
        .get(country.readByNom);


    app.route('/country/:nomPays/etablissements')
        .get(country.getSchoolsByCountryName)
        .put(country.addSchoolToCountry);


    app.route('/country/:nomPays/etablissements/:nomEtablissement')
        .get(country.read_a_schoolByName)
        .delete(country.delete_a_school);

    app.route('/:nomPays/etablisements')
        .post(
            school.createSchool
        );
}
