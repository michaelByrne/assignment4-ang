(function () {
    'use strict';

    angular.module('MenuApp')
        .component('foodList', {
            templateUrl: 'src/menuapp/templates/itemlist.template.html',
            bindings: {
                item: '<'
            }
        });

})();