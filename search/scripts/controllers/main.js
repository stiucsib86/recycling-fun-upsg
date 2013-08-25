'use strict';

angular.module('sgRecyclingBinApp')
.controller('MainCtrl', function($http, $scope, $timeout) {

  var OneMap;
  
  var initializeOneMap = function() {
    //    //add map with default settings
    //    var OneMap = new GetOneMap('divMain','SM');

    //    //add map with defined centerPoint
    //    var centerPoint="28968.103,33560.969"
    //    var OneMap = new GetOneMap('divMain','SM',{center:centerPoint});

    //    //add map with defined zoom level
    //    var levelNumber=8;
    //    var OneMap = new GetOneMap('divMain','SM',{level:levelNumber});

    //add map with defined center location and zoom level
    var centerPoint = "28968.103,33560.969";
    var levelNumber = 2;
    OneMap = new GetOneMap('divMain', 'SM', {level: levelNumber, center: centerPoint});

    $timeout(function() {
      $scope.OneMapverlay();
    }, 1000);

  };

  $scope.OneMapverlay = function() {
    var kmlPath = 'data/binsMapLocation.kml';
    OneMap.overlayKML(kmlPath);
  };

  var initializeBinLocationChart = function() {

    Morris.Bar({
      element: 'bar-example',
      data: [
        {y: 'Ang Mo Kio', a: 100, b: 197},
        {y: 'Bedok', a: 75, b: 562},
        {y: 'City', a: 50, b: 108},
        {y: 'Clementi', a: 75, b: 301},
        {y: 'Hougang', a: 50, b: 339},
        {y: 'Jurong', a: 68, b: 559},
        {y: 'Tampines', a: 75, b: 563},
        {y: 'Queenstown', a: 100, b: 393},
        {y: 'Woodlands', a: 200, b: 605}
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Number of bins', 'Collection per household']
    });
  };

  var GetCurrentLevel = function() {
    alert("Current Level:" + OneMap.map.getLevel());
  };

  $scope.GetBinsLocation = function() {
    $http({
      method: 'GET',
      url: 'data/binsLocation.json'
    }).success(function(xhrResponse) {
      $scope.recyclingBinLocations = xhrResponse;
    });
  };

  (function() {
    initializeOneMap();
    initializeBinLocationChart();
    $scope.GetBinsLocation();
  })();

})
.controller('UserCtrl', function($http, $scope, $timeout) {

  $scope.currentUrl = encodeURIComponent(window.location.href);

  Morris.Donut({
    element: 'donut-example',
    data: [
      {label: "Paper", value: 6},
      {label: "Can", value: 3},
      {label: "Glass", value: 7},
      {label: "Plastic", value: 4},
      {label: "Cloth", value: 4},
      {label: "Garden", value: 2},
      {label: "misc", value: 1}
    ]
  });


  Morris.Bar({
    element: 'bar-example',
    data: [
      {y: 'April', a: 5, b: 40},
      {y: 'May', a: 4, b: 65},
      {y: 'Jun', a: 6, b: 40},
      {y: 'July', a: 7, b: 65},
      {y: 'Aug', a: 9, b: 90}
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Series A']
  });


//  $(function() {
//    $(".dial").knob();
//  });

});
