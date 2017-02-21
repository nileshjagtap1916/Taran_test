function dashboardController($scope,$http) {

 $scope.isClosed = false;
 $scope.test={};
 $scope.test.openNav=true

$scope.sendContract=function()
{
console.log($scope.articlePrice.toString());

  var contractDetails={
  	CONTRACT_ID : "123456789098",
  	ORDER_INFO : "22212345",
  	PAYMENT_COMMITMENT : true,
  	PAYMENT_CONFIRMATION : true,
  	INFORMATION_COUNTERPARTY : true,
  	FORFEITING_INVOICE : true,
  	CONTRACT_CREATE_DATE : "10-10-2017",
  	PAYMENT_DUE_DATE : "09-09-2017",
  	INVOICE_STATUS : "started",
  	PAYMENT_STATUS : "started",
  	CONTRACT_STATUS : "started",
  	DELIVERY_STATUS : "started"
  };
  var articleDetails={
  	ORDER_ID : "22212345",
  	ARTICALE_LIST :
  		[
  			{
  				ARTICLE_DESC : $scope.articleName.toString(),
  				ARTICLE_QTY : $scope.articleQuantity.toString(),
  				ARTICALE_PRICE : $scope.articlePrice.toString()
  			}/*,
  			{
  				ARTICLE_DESC : "test2",
  				ARTICLE_QTY : "20",
  				ARTICALE_PRICE : "20"
  			}*/
  		],
  	BUYER_INFO : "BuyerUser",
  	SELLER_INFO : "SellerUser",
  	SHIPMENT_INFO : "NA",
  	TOTAL_AMOUNT : "500"
  };

  var config = {headers:  {
      'Accept': 'application/json;odata=verbose',
      "content-type": "application/json",
  }
};

var dataToSend={
  "jsonrpc": "2.0",
  "method": "invoke",
  "params": {
      "type": 1,
      "chaincodeID":{
          "name":"f47d89813519f341718942a5ea27c7ef95df2653ffbbfa28dd2cad60a6bbe3236cc89a42c93f1f3216e303d199839c1a3117571bc1b287e1964a597fb79f11ca"
      },
      "ctorMsg": {
         "args":["SaveContract",JSON.stringify(contractDetails),JSON.stringify(articleDetails)]
      },
      "secureContext": "jim"
  },
  "id": 3
}


/*$http({
  method: 'POST',
  url: 'http://192.168.94.100:7050/chaincode',
  headers: {
      'Content-type': 'application/x-www-form-urlencoded'
  },
  data:dataToSend

}).then(function successCallback(response) {
  console.log(response.data)

//$state.go('dashboard',{});

}, function errorCallback(response) {
  console.log(response)
});*/



};


 $scope.openNav1=function()
 {

 if($scope.isClosed == false)
 {

 $scope.test.openNav=false;
 $scope.isClosed = true;

 }
 else if($scope.isClosed == true)
 {
 $scope.test.openNav=true;
 $scope.isClosed = false;

 }

 }

}


/*$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }

  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });
});*/
