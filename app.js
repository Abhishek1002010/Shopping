(function () {

'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController',Buy)
.controller('AlreadyBoughtController',Bought)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

Buy.$inject=['ShoppingListCheckOffService'];
function Buy(ShoppingListCheckOffService){
var buy=this;

buy.list=ShoppingListCheckOffService.showBuy();
console.log(buy.list);
buy.sright=function(index){
ShoppingListCheckOffService.buyItem(index);
};

/*buy.bought=ShoppingListCheckOffService.showBought();
buy.sleft=function(index){
ShoppingListCheckOffService.cancelItem(index);
};*/

}

Bought.$inject=['ShoppingListCheckOffService'];
function Bought (ShoppingListCheckOffService) {
var b=this;
b.bought=ShoppingListCheckOffService.showBought();
b.sleft=function(index){
ShoppingListCheckOffService.cancelItem(index);
};

}

function ShoppingListCheckOffService(){
var service=this;

  var to_buy=[];
  var bought=[ ];

var i ={ 
name: "Cookies",
quantity:10};
to_buy.push(i);
var i ={ 
name: "Coke",
quantity:15};
to_buy.push(i);
var i ={ 
name: "Cold drinks",
quantity:3};
to_buy.push(i);
var i ={ 
name: "Fish",
quantity:12};
to_buy.push(i);
var i ={ 
name: "Egg",
quantity:16};
to_buy.push(i);

service.buyItem=function(index){
var x=to_buy.splice(index,1);
var y=x[0];
bought.push(y);
console.log(bought);
};
service.showBuy=function(){
return to_buy;
};

service.showBought=function(){
return bought;
};

service.cancelItem=function(index){
var x=bought.splice(index,1);
var y=x[0];
to_buy.push(y);
console.log(bought);
};

  }
}
)();
