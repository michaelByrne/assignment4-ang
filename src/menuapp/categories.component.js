(function () {
    'use strict';

    angular.module('MenuApp')
        .component('catList', {
            templateUrl: 'src/menuapp/templates/categories-comp.template.html',
            bindings: {
                categories: '<'
            }
        });

})();