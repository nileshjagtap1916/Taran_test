function dashboardController($scope,$http,$rootScope) {


$scope.buyerFlagLocal=$rootScope.buyerFlag;

$scope.createAgrSuccess=false;

if($scope.buyerFlagLocal==true)
{
  $scope.buyerOrSellerFlag=true;
}


$scope.createAgr=function()
{
$scope.showBuyerAgreement=false;
$scope.buyerOrSellerFlag=false;
$scope.buyerFlagLocal=false;

$scope.createAgrSuccess=false;


};


$scope.sellerViewAgr=function()
{

$scope.buyerFlagLocal=true;
$scope.buyerOrSellerFlag=false;
  $scope.orderSelect=true;
  $scope.orderSelected=false;

$scope.showBuyerAgreement=true;


//Seller query..
var jsonQuery={
  "jsonrpc": "2.0",
  "method": "query",
  "params": {
    "type": 1,
    "chaincodeID": {
      "name": "03a5bb02bf8a1702704f9a84948904fdc9913a9a5166d63b4aea92c0b9df17d8a614a3d5599e70e1e9d47240b15ef6a9cabd8133ad8c394f65710e7013735c8b"
    },
    "ctorMsg": {
      "args": ["GetContract","BuyerUser"]
    },
    "secureContext": "jim"
  },
  "id": 2
} ;

//Seller Query

$http({
  method: 'POST',
  url: 'http://192.168.94.100:7050/chaincode',
  headers: {
      'Content-type': 'application/json'
  },
  data:jsonQuery
}).then(function successCallback(response) {

response.data.result.message=JSON.parse(response.data.result.message);

  /*for (var i = 0, len = response.data.result.message.length; i < len; i++){
      response[i].fullname = JSON.parse(response[i].fullname)
      //This will convert the strings into objects before Ng-Repeat Runs
    //Now we will set customers = to response
     $scope.customers = response

   }*/
  console.log(response.data)

    $scope.articleListTemp=response.data.result.message;

  // $scope.detailsTemp=response.data.result.message[0].ORDER_INFO;


//  $scope.articleList=response.data.result.message[0].ORDER_INFO.ARTICALE_LIST;

//  $scope.details=response.data.result.message[0].ORDER_INFO;

$scope.contractDetailsShow=[];

$scope.selectedValueView=0;

for(var j=0;j<response.data.result.message.length;j++)
{
  $scope.contractDetailsShow.push({id:j,value:response.data.result.message[j].CONTRACT_ID});
}



//$scope.contractDetailsShow=response.data.result.message;


//$state.go('dashboard',{});
}, function errorCallback(response) {
  console.log(response)
});


};


$scope.selectedContractNew=function(idx)
{
  var value= idx;

  console.log("value"+idx);

  $scope.orderSelected=true;

  $scope.articleList=$scope.articleListTemp[value].ORDER_INFO.ARTICALE_LIST;

  $scope.details=$scope.articleListTemp[value].ORDER_INFO;

};

if($scope.buyerFlag==true)
{

  $scope.orderSelect=true;
  $scope.orderSelected=false;

$scope.showBuyerAgreement=true;


//Buyer Query
var jsonQuery={
  "jsonrpc": "2.0",
  "method": "query",
  "params": {
    "type": 1,
    "chaincodeID": {
      "name": "03a5bb02bf8a1702704f9a84948904fdc9913a9a5166d63b4aea92c0b9df17d8a614a3d5599e70e1e9d47240b15ef6a9cabd8133ad8c394f65710e7013735c8b"
    },
    "ctorMsg": {
      "args": ["GetContract","BuyerUser"]
    },
    "secureContext": "jim"
  },
  "id": 2
} ;


//Buyer Query
$http({
  method: 'POST',
  url: 'http://192.168.94.100:7050/chaincode',
  headers: {
      'Content-type': 'application/json'
  },
  data:jsonQuery
}).then(function successCallback(response) {

response.data.result.message=JSON.parse(response.data.result.message);

  /*for (var i = 0, len = response.data.result.message.length; i < len; i++){
      response[i].fullname = JSON.parse(response[i].fullname)
      //This will convert the strings into objects before Ng-Repeat Runs
    //Now we will set customers = to response
     $scope.customers = response

   }*/
  console.log(response.data)

    $scope.articleListTemp=response.data.result.message;

  // $scope.detailsTemp=response.data.result.message[0].ORDER_INFO;


//  $scope.articleList=response.data.result.message[0].ORDER_INFO.ARTICALE_LIST;

//  $scope.details=response.data.result.message[0].ORDER_INFO;

$scope.contractDetailsShow=[];

$scope.selectedValueView=0;

for(var j=0;j<response.data.result.message.length;j++)
{
  $scope.contractDetailsShow.push({id:j,value:response.data.result.message[j].CONTRACT_ID});
}



//$scope.contractDetailsShow=response.data.result.message;


//$state.go('dashboard',{});
}, function errorCallback(response) {
  console.log(response)
});


}
else if($rootScope.buyerFlag==false)
{
  $scope.showBuyerAgreement=false;
}




 $scope.isClosed = false;
 $scope.test={};
 $scope.test.openNav=true

$scope.buyerList=[{id:0, name:'--Please Select--'},{id:1, name:'BuyerUser'}];

$scope.selectedBuyer=$scope.buyerList[0];




$scope.sellerName="Seller1";

$scope.articles=[{selectedArticleName:"",articleName:[{id:0, name:'--Please Select--'},{id:1, name:'Article1'},{id:2, name:'Article2'},{id:3, name:'Article3'},{id:4, name:'Article4'},{id:5, name:'Article5'}],
selectedArticleQty:"",articleQuantity:[{id:0, name:'--Please Select--'},{id:1, name:'Quantity1'},{id:2, name:'Quantity2'},{id:3, name:'Quantity3'},{id:4, name:'Quantity4'},{id:5, name:'Quantity5'}],
selectedArticlePrice:"",articlePrice:[{id:0, name:'--Please Select--'},{id:1, name:'Price1'},{id:2, name:'Price2'},{id:3, name:'Price3'},{id:4, name:'Price4'},{id:5, name:'Price5'}]}];

$scope.articleName=$scope.articles[0].articleName[0];
$scope.articleQuantity=$scope.articles[0].articleQuantity[0];
$scope.articlePrice=$scope.articles[0].articlePrice[0];


$scope.addAnotherArticle=function()
{
$scope.articles.push({selectedArticleName:"",articleName:[{id:0, name:'--Please Select--'},{id:1, name:'Article1'},{id:2, name:'Article2'},{id:3, name:'Article3'},{id:4, name:'Article4'},{id:5, name:'Article5'}],
selectedArticleQty:"",articleQuantity:[{id:0, name:'--Please Select--'},{id:1, name:'Quantity1'},{id:2, name:'Quantity2'},{id:3, name:'Quantity3'},{id:4, name:'Quantity4'},{id:5, name:'Quantity5'}],
selectedArticlePrice:"",articlePrice:[{id:0, name:'--Please Select--'},{id:1, name:'Price1'},{id:2, name:'Price2'},{id:3, name:'Price3'},{id:4, name:'Price4'},{id:5, name:'Price5'}]});
};

$scope.sendContract=function()
{
console.log($scope.articlePrice.toString());
$scope.articleListToDb=[];

$rootScope.uniqueId=(Date.now()).toString();

$scope.contractIdCreate=$rootScope.uniqueId;

console.log("Contract id"+$rootScope.uniqueId);

for(var i=0; i<$scope.articles.length; i++)
{
  $scope.articleListToDb.push({ARTICLE_DESC : $scope.articles[i].selectedArticleName.name,
  ARTICLE_QTY : $scope.articles[i].selectedArticleQty.name,
  ARTICALE_PRICE : $scope.articles[i].selectedArticlePrice.name});
}





$rootScope.secondUniqueId=(Date.now()).toString();
console.log("Order id"+$rootScope.secondUniqueId);

//Seller Create Contract/ invoke

  var contractDetails={
  	CONTRACT_ID : $rootScope.uniqueId,
  	ORDER_INFO : $rootScope.secondUniqueId,
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
  	ORDER_ID :  $rootScope.secondUniqueId,
  	ARTICALE_LIST : $scope.articleListToDb,
  		/*[
  			{
  				ARTICLE_DESC : $scope.articleName.toString(),
  				ARTICLE_QTY : $scope.articleQuantity.toString(),
  				ARTICALE_PRICE : $scope.articlePrice.toString()
  			},
  			{
  				ARTICLE_DESC : "test2",
  				ARTICLE_QTY : "20",
  				ARTICALE_PRICE : "20"
  			}
  		],*/
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
          "name":"03a5bb02bf8a1702704f9a84948904fdc9913a9a5166d63b4aea92c0b9df17d8a614a3d5599e70e1e9d47240b15ef6a9cabd8133ad8c394f65710e7013735c8b"
      },
      "ctorMsg": {
         "args":["SaveContract",JSON.stringify(contractDetails),JSON.stringify(articleDetails)]
      },
      "secureContext": "jim"
  },
  "id": 3
}

//Seller Create Contract/ invoke
$http({
  method: 'POST',
  url: 'http://192.168.94.100:7050/chaincode',
  headers: {
      'Content-type': 'application/x-www-form-urlencoded'
  },
  data:dataToSend
}).then(function successCallback(response) {
  console.log(response.data);
$scope.createAgrSuccess=true;

for(var t=0;t<$scope.articles.length;t++)
{
  $scope.articleName=$scope.articles[t].articleName[t];
  $scope.articleQuantity=$scope.articles[t].articleQuantity[t];
  $scope.articlePrice=$scope.articles[t].articlePrice[t];
}
$scope.selectedBuyer=$scope.buyerList[0];

//$state.go('dashboard',{});
}, function errorCallback(response) {
  console.log(response);
});



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
