(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
MenuAppController.$inject = ['items'];
function MenuAppController(items) {
  var mainList = this;
  mainList.items = items;
  console.log(mainList.items);

  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
}

})();
