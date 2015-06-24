<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>We Connect</title>
	<!-- seth the base tag -->
	<base href="/">
	<!-- bootstrap the css styles -->
	<link rel="stylesheet" href="public/lib/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="public/lib/ionicons/css/ionicons.min.css">
	<link rel="stylesheet" href="public/lib/ngprogress/ngProgress.css">
	<link rel="stylesheet" href="public/app/css/app.css">
	<link rel="stylesheet" href="public/app/css/animations.css">
	
	<!-- bootstrap the main js files -->
	<script src="public/lib/jquery/dist/jquery.min.js"></script>
	<script src="public/lib/angular/angular.min.js"></script>
</head>
<body ng-app="innova">

	<!-- set the nav -->
	<div class="nav-nav hidden-xs">
		<div class="logo">
			<img src="public/media/logo.png" alt="">
		</div>
		<div class="right">
			<a href="" menu><i class="ion-navicon-round"></i></a>
		</div>
	</div>
	<a href="" menu class="menu visible-xs">
		<i class="ion-navicon round"></i>
	</a>
	<!-- set the sidebar -->
	<div class="sidebar">
		<a href="/"><img src="public/media/logo.png" alt=""></a>
		<a href="/about">¿Qué es WeConnect?</a>
		<a href="/services">¿Qué hacemos?</a>
		<a href="/create_project">Crear un proyecto</a>
		<a href="/projects">Nuestros Proyectos</a>
		<a href="/blog">Blog</a>
		<a href="/promos">Promociones</a>
		<a href="/contact">Contacto</a>
	</div>
	<!-- set the overlay -->
	<div class="overlay" menu></div>
	<!-- set the router -->
	<div ng-view class="view" scroll></div>

	<!-- set the token -->
	<div token="{{csrf_token()}}"></div>

	<!-- bootstrap the app js files -->
	<script src="public/lib/angular-route/angular-route.min.js"></script>
	<script src="public/lib/angular-animate/angular-animate.min.js"></script>
	<script src="public/lib/ngprogress/build/ngProgress.min.js"></script>
	<script src="public/lib/angular-touch/angular-touch.min.js"></script>
	<script src="public/app/js/scroll.js"></script>
	<script src="public/app/js/app.js"></script>
	<script src="public/app/js/controllers.js"></script>
	<script src="public/app/js/services.js"></script>
</body>
</html>