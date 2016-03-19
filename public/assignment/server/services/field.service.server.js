
var uuid = require('node-uuid');

module.exports = function(app, model, db){
    var forms = require('models/form.mock.json');

    app.get('/api/assignment/form/:formId/field', function(req, res){
        var form_id = req.params['formId'];
        var form = forms.filter(function(f){return f._id == form_id;});
        var form_index=forms.indexOf(form);
        var fields = forms[form_index].fields;
        res.send(fields);
    });

    app.get('/api/assignment/form/:formId/field/:fieldId', function(req, res){
        var form_id = req.params['formId'];
        var field_id = req.params['fieldId'];
        var form = forms.filter(function(f){return f._id == form_id;});
        var form_index=forms.indexOf(form);
        var fields = forms[form_index].fields;
        var field= fields.filter(function(f){return f._id == field_id;});
        var field_index = fields.indexOf(field);
        res.send(fields[field_index]);
    });

    app.delete('/api/assignment/form/:formId/field/:fieldId', function(req, res){
        var form_id = req.params["formId"];
        var form = forms.filter(function(f){return f._id == form_id;});
        var form_index=forms.indexOf(form);
        var fields = forms[form_index].fields;
        var field_id = req.params["fieldId"];
        var field = fields.filter(function(f){return f._id == field_id;});
        var field_index = fields.indexOf(field);
        fields.splice(field_index, 1);
        //res.send(fields);
    });

    app.post('/api/assignment/form/:formId/field', function(req, res){
        var form_id = req.params["formId"];
        var form = forms.filter(function(f){return f._id == form_id;});
        var form_index=forms.indexOf(form);
        var fields = forms[form_index].fields;
        var newfield = req.body;

        /*


         */

    });

    app.put('api/assignment/form/:formId/field/:fieldId', function(req, res){

    });


};