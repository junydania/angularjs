(function (){
    'use strict';
    angular.module("demoApp").filter('sortByFirstName', filters);

        function filters() {
            return function (array) {
                function compare(a,b) {
                    return a.firstName.localeCompare(b.firstName)
                }
                return array.sort(compare);
        }
    }
})();









