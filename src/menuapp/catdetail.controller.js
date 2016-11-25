(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CatDetailController', CatDetailController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
    CatDetailController.$inject = ['item'];
    function CatDetailController(item) {
        var itemDetail = this;
        itemDetail.item = item;
        console.log(itemDetail.item);

        // mainList.$onInit = function () {
        //   ShoppingListService.getItems()
        //   .then(function (result) {
        //     mainList.items = result;
        //   });
        // };
    }

})();