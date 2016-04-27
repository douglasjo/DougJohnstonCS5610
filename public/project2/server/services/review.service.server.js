module.exports = function(app, model){

    app.get('/api/assignment/doc/:docId/review', function(req, res){
        var doc = model.getdocById(req.params['docId']);
        var reviews = doc.reviews;
        if (req.params['reviewId']) {
            var review = reviews.filter(function(f){return f._id == review_id;});
            var review_index = reviews.indexOf(review);
            res.send(reviews[review_index]);
        } else {
            res.send(reviews);
        }
    });


    app.delete('/api/assignment/doc/:docId/review/:reviewId', function(req, res){
        Model.deleteReview(docId, reviewId);
        var doc = model.getdocById(req.params['docId']);
        res.send(doc.reviews);
    });

    app.post('/api/assignment/doc/:docId/review', function(req, res){
        Model.createReview(req.params['docId'], req.body);
        var doc = model.getdocById(req.params['docId']);
        res.send(doc.reviews);
    });

    app.put('api/assignment/doc/:docId/review/:reviewId', function(req, res){
        Model.updateReview(req.params['docId'], req.params['reviewId'], req.body);
        var doc = model.getdocById(req.params['docId']);
        res.send(doc.reviews);
    });
};