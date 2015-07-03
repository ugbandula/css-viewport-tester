angular.module('demoApp', [])

/**
 *  Main Controller
 */
    .controller('MainController', ['$scope', function ($scope) {
        $scope.currentContext = 1;

        $scope.isMyContext = function(contextID) {
            return $scope.currentContext == contextID;
        };

        $scope.setContext = function(newContextID) {
            $scope.currentContext = newContextID;
        }

        $scope.setContext(1);
    }])
;
