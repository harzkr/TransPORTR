angular.module("zwyft").controller('NewOrderCtrl',['$scope','$meteor','$log',
function($scope,$meteor,$log){
    var self = this;

    self.createFilterFor = function(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function(city){
            return (city.value.indexOf(lowercaseQuery) === 0);
        };
    }; 
    self.querySearch= function (query) {
        var results = query ? self.cities.filter( createFilterFor(query) ) : self.cities;
        return results;
    };
    self.searchTextChange = function(text) {
        $log.info('Text changed to ' + text);
    };
    self.selectedItemChange = function(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    };
/**
 * Build `states` list of key/value pairs
 */
  self.cities = function (){
      var allCities = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
      return allCities.split(/, +/g).map(function(city){
          return{
              value: city.toLowerCase(),
              display: city
          };
      });
  };
}]);
