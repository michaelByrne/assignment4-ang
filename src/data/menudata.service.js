(function () {
    'use strict';
    angular.module('Data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");


    MenuDataController.$inject = ['MenuDataService'];
    function MenuDataController(MenuDataService) {
        var menu = this;

        var promise = MenuDataService.getMenuCategories();

        promise.then(function (response) {
                menu.categories = response.data;
            })
            .catch(function (error) {
                console.log("Something went terribly wrong.");
            });

        menu.logMenuItems = function (shortName) {
            var promise = MenuDataService.getMenuForCategory(shortName);

            promise.then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        };

    }


    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getMenuCategories = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            });

            return response;
        };


        service.getMenuForCategory = function (shortName) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params: {
                    category: shortName
                }
            });

            return response;
        };

    }
})();