(function (){
    'use strict';
    angular.module("demoApp").service('userService', services)


        function services(){
            var collection = [
                {firstName: 'Ose', lastName: 'Dania'},
                {firstName: 'Jojo', lastName: 'Dania'},
                {firstName: 'Tobias', lastName: 'Dania'}
            ];
            return {
                users: function(){
                    return collection;
                    },
                add: function(object) {
                    collection.push(object);
                    }
                }
        }
})();

