var uuid = require('node-uuid');

module.exports = function (app, model) {

        app.get('/api/assignment/form', function(req, res){
            if (req.params['formTitle']) {
                res.send(model.findFormByTitle());
            } else if (req.params['formId']) {
                res.send(model.getFormById(req.params['formId']));
            } else if (req.params['userId']) {
                res.send(model.getFormsByUserId(req.params['userId']));
            } else {
                var forms = model.getAllForms();
                res.send(forms);
            }
        });
/*
        //api/assignment apis
        app.get('/api/assignment/user/:userId/form', function(req, res){
            console.log("getting my forms");
            var user_id = req.params["userId"];
            res.send(model.getFormByUserId(user_id));
            /*
            var allforms = model.getAllForms();
            var myforms = forms.filter(function(f){return f.userId == user_id;});
            res.send(myforms);*//*
        });*/
/*
        app.get('/api/assignment/form/:formId', function(req, res){
            var id = req.params["formId"];
            res.send(model.getFormById(id));
            /*
            var form_id = req.params["formId"];
            var forms = model.getAllForms();
            var form = forms.filter(function(f){return f._id == form_id;});
            var form_index=forms.indexOf(form);
            //console.log("sending form back to client.." + form_index);
            res.send(forms[form_index]);*//*
        });*/
/*
        app.get("/api/assignment/form/title/:formTitle", function(req, res){
            res.send(model.findFormByTitle());


            /*
            var form_title = req.params["formTitle"];
            var forms = model.getAllForms();
            var form = forms.filter(function(f){return f.title == form_title;});
            var form_index=forms.indexOf(form);
            res.send(forms[form_index]);*/ /*
        });
*/
        app.delete("/api/assignment/form/:formId", function(req, res){
            var form_id = req.params["formId"];
            model.deleteFormById(form_id);
            /*
            var forms = model.getAllForms();
            var form = forms.filter(function(f){return f._id == form_id;});
            var form_index=forms.indexOf(form);
            forms.splice(form_index, 1);*/
            res.send(forms);
        });

        app.put('/api/assignment/form/:formId', function(req, res){
            var form_id = req.params["formId"];
            model.updateForm(form_id, req.body);
            /*
            var forms = model.getAllForms();
            var form = forms.filter(function(f){return f._id == form_id;});
            var form_index=forms.indexOf(form);

            var newform = req.body;
            forms[form_index].title=newform.title;
            forms[form_index].fields=newform.fields;
            */
            res.json(forms);
        });

        app.post('/api/assignment/user/:userId/form', function(req, res){
            console.log("server createform called");
            console.log(req.body);
            var form = req.body;
            form.userId = req.params["userId"];
            form._id = uuid.v1();
            model.createForm(form);
            //model.createForm(form);
            res.send(forms);
        });
    };
//})();