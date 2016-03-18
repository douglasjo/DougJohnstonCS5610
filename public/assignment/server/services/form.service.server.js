
module.exports = function(app){

    //read the data from mock json file
    var forms = require('models/form.mock.json');

    //rest apis
    app.get('/rest/form', function(req, res){
        console.log("after refactoring ----sending forms to client..");
        res.send(forms);
    });

    app.get('/rest/form/:id', function(req, res){

        var form_index = req.params["id"];
        console.log("sending form back to client.." + form_index);

        res.send(forms[form_index]);
    });

    app.delete("/rest/form/:id", function(req, res){
        console.log("server side deleting...");
        var form_id = req.params["id"];
        forms.splice(form_id, 1);
        res.send(forms);
    });

    app.put('/rest/form/:id', function(req, res){
        var index = req.params["id"];
        console.log('updating...' + index);

        var form = req.body;
        console.log('updating..form title: ' + form.formName);
        forms[index].title=form.title;
        forms[index].fields=form.fields;
        res.json(forms);
    });

    app.post('/rest/form', function(req, res){
        var form = req.body;
        forms.push(form);
        res.send(forms);
    });
};