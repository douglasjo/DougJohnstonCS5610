"use strict";
(function(){
    angular
        .module("ProjectApp")
        .controller("DocController", DocController);
    function DocController($scope, $rootScope, DocService) {
        //$scope.showFields=false;
        $scope.selectedDoc= {};
        var selectedId = 1;
        $scope.myDocs = DocService.findAllDocsForUser($rootScope.currentUser._id);


        //$scope.fieldUrl="#/form/"+ selectedId + "formId/fields";

        $scope.addDoc = function() {
            var newDoc = {
                "title": $scope.selectedTitle,
                "userId": $rootScope.currentUser._id,
                "_id": (new Date).getTime()
            };
            //console.log("id is: " + $rootScope.currentUser._id);
            //console.log("newform is: " + newForm);
            DocService.createDocForUser($rootScope.currentUser._id, newDoc);
            $scope.myDocs = FormService.findAllDocsForUser($rootScope.currentUser._id);
        };

        $scope.updateDoc = function() {
            //console.log("updateform called");
            $rootScope.doc=$scope.selecteddoc;
            $scope.selectedDoc.title= $scope.selectedTitle;
            FormService.updateDocById($scope.formId, $scope.selectedDoc);
        };

        $scope.deleteDoc = function($index) {
            var docId = $scope.myDocs[$index]._id;
            DocService.deleteDocById(docId);
            //console.log($scope.myForms);
            //console.log($index);
            //$scope.myForms.splice($index, 1);
        };

        $scope.selectDoc = function($index) {
            $scope.selectedDoc=$scope.myDocs[$index];
            $scope.selectedTitle=$scope.selectedDoc.title;
            $rootScope.form=$scope.selectedDoc;
        };
/*
        $scope.fieldClick = function() {
            //$scope.showFields=true;
            if (selectedForm != null) {
                $location='form/'+ selectedForm._id + '/fields';
            }


            //$scope.fieldTarget = fields.view.html;
        };*/
    }
})();