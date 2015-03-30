angular.module('starter.directives', [])

.directive('timeline',function(){
	return {
	 	restrict: 'E',
        replace: true,
        scope: {
            tracks: '='
        },
        templateUrl: '../templates/directive/timeline-tpl.html',
        link: function(scope,ele,attr){
        	console.log('enter directive');
        }
	}
})
