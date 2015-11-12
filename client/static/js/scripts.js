var myAppModule = angular.module('myApp', ['ngRoute']);

myAppModule.factory('taskFactory', function(){
    var tasks = [];
    var factory = {};
    factory.getTasks = function(callback){
        callback(tasks);
    }
    factory.addTask = function(task){
        if(!task.name || !task.priority || !task.deadline){
            alert('Please complete all task information');
        }
        else{
            tasks.push({name: task.name, priority: task.priority, deadline: task.deadline, created: Date.now()});
        }
    }
    return factory;
});
myAppModule.controller('tasksController', function ($scope, taskFactory) {
    $scope.tasks = [];
    taskFactory.getTasks(function(data){
        $scope.tasks = data;
    });
    $scope.addTask = function(){
        taskFactory.addTask($scope.newTask);
        $scope.newTask = {};
    }
    $scope.removeTask = function(task){
        $scope.tasks.splice($scope.tasks.indexOf(task), 1);
    }
});
