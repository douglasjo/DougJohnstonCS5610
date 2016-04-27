var uuid = require('node-uuid');

module.exports = function (app, model) {

        app.get('/api/assignment/doc', function(req, res){
            if (req.params['docTitle']) {
                res.send(model.findDocByTitle());
            } else if (req.params['docId']) {
                res.send(model.getDocById(req.params['docId']));
            } else if (req.params['userId']) {
                res.send(model.getDocsByUserId(req.params['userId']));
            } else {
                var docs = model.getAllDocs();
                res.send(docs);
            }
        });

        app.delete("/api/assignment/doc/:docId", function(req, res){
            var doc_id = req.params["docId"];
            model.deleteDocById(doc_id);
            res.send(docs);
        });

        app.put('/api/assignment/doc/:docId', function(req, res){
            var doc_id = req.params["docId"];
            model.updateDoc(doc_id, req.body);
            res.json(docs);
        });

        app.post('/api/assignment/user/:userId/doc', function(req, res){
            var doc = req.body;
            doc.userId = req.params["userId"];
            doc._id = uuid.v1();
            model.createDoc(doc);
            res.send(docs);
        });
    };
//})();