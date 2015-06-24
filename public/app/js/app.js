/**
* Set the angular module named innova
*/
var app = angular.module('innova', ['ngRoute', 'ngAnimate', 'ngProgress', 'ngTouch']);

/**
* Create a function to easy render the views
*/
var render = function(path)
{
	return {
		templateUrl: 'public/templates/' + path + '.html',
		controller: path
	}
}

/**
* Set the run function to change progress status 
*/
app.run(function($rootScope, ngProgress)
{

	ngProgress.color('#e74c3c');

	$rootScope.$on('$routeChangeStart', function()
	{
		ngProgress.start();
	});

	$rootScope.$on('$routeUpdate', function()
	{
		ngProgress.start();
	});

	$rootScope.$on('$routeChangeSuccess', function()
	{
		ngProgress.complete();

		if(jQuery('.sidebar').hasClass('sidebar-open'))
		{
			angular.element('.sidebar').toggleClass('sidebar-open');
			angular.element('.overlay').toggleClass('sidebar-open');
		}
	});

	$rootScope.$on('$routeChangeError', function()
	{
		ngProgress.stop();
	});
});

/**
* Set the app router
*/
app.config(function($routeProvider, $locationProvider)
{
	$routeProvider.when('/', render('home'));
	$routeProvider.when('/about', render('about'));
	$routeProvider.when('/services', render('services'));
	$routeProvider.when('/projects', render('projects'));
	$routeProvider.when('/promos', render('promos'));
	$routeProvider.when('/contact', render('contact'));
	$routeProvider.when('/blog', render('blog'));
	$routeProvider.when('/blog/:slug', render('blogShow'));
	$routeProvider.when('/create_project', render('createProject'));

	$locationProvider.html5Mode(true);
});