var uuid = require('node-uuid');

/*(function() {
    angular
        .module("FormServiceApp")*/

module.exports = function(app, model){

        app.get('/api/assignment/form', function(req, res){
            var forms = model.getAllForms();
            res.send(forms);
        });

        //api/assignment apis
        app.get('/api/assignment/user/:userId/form', function(req, res){
            //console.log("after refactoring ----sending forms to client..");
            var user_id = req.params["userId"];

            var myforms=
            //var myforms = forms.filter(function(f){return f.userId == user_id;});
            res.send(myforms);
        });

        app.get('/api/assignment/form/:formId', function(req, res){
            var form_id = req.params["formId"];
            var form = forms.filter(function(f){return f._id == form_id;});
            var form_index=forms.indexOf(form);
            //console.log("sending form back to client.." + form_index);
            res.send(forms[form_index]);
        });

        app.get("/api/assignment/form/title/:formTitle", function(req, res){
            var form_title = req.params["formTitle"];
            var form = forms.filter(function(f){return f.title == form_title;});
            var form_index=forms.indexOf(form);
            res.send(forms[form_index]);
        });

        app.delete("/api/assignment/form/:formId", function(req, res){
            //console.log("server side deleting...");
            var form_id = req.params["formId"];
            var form = forms.filter(function(f){return f._id == form_id;});
            var form_index=forms.indexOf(form);
            forms.splice(form_index, 1);
            res.send(forms);
        });

        app.put('/api/assignment/form/:formId', function(req, res){
            var form_id = req.params["formId"];
            var form = forms.filter(function(f){return f._id == form_id;});
            var form_index=forms.indexOf(form);
            //console.log('updating...' + index);

            var newform = req.body;
            //console.log('updating..form title: ' + newform.title);
            forms[form_index].title=newform.title;
            forms[form_index].fields=newform.fields;
            res.json(forms);
        });

        app.post('/api/assignment/user/:userId/form', function(req, res){
            var form = req.body;
            form.userId = req.params[userId];
            form._id = uuid.v1();
            forms.push(form);
            res.send(forms);
        });
    };
//})();