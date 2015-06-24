app.directive('menu', function()
{
	return {
		link: function(scope, element, attrs)
		{
			angular.element(element).on('click', function()
			{
				angular.element('.sidebar').toggleClass('sidebar-open');
				angular.element('.overlay').toggleClass('sidebar-open');
			});
		}
	}
});

app.directive('scroll', function()
{
	return {
		link: function(scope, element, attrs)
		{
			$(element).niceScroll({
			    styler:"fb",
			    cursorcolor:"#e6524d", 
			    cursorwidth: '8', 
			    cursorborderradius: '0', 
			    background: 'transparent', 
			    spacebarenabled:false,  
			    autohidemode: false,
			    cursorborder: '', 
			    zindex: '997'
			});
		}
	}
});



app.factory('Background',function()
{
	return {
		color: function(color, text)
		{
			angular.element('body').css({
				'background' : color,
				'background-size': 'cover'
			});
		}
	}
});