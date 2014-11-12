angular.module('serverApp')
.controller("loginCtrl",function($scope,$rootScope,$http,$location){
        $scope.login = function(user){
            $http.post('users/loginStd',user).success(function(data){
                $rootScope.allData=data.allData;
                $rootScope.user = data.user;
                alert(data.message);
                $location.path('/studentHome');
            })
                .error(function(data){
                    console.log(user);
                    console.log(data);
                })

        };
        $scope.adminLogin = function(user){
            $http.post('users/loginAdm',user).success(function(data){
                $rootScope.user = data;
                console.log(data);
                $location.path('/adminPanel')
            })
                .error(function(data){
                    console.log(user);
                    console.log(data);
                })

        };
    });