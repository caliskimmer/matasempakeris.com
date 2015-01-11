/*init global slideshow var and set event listeners*/
var timer;
var slideshow;
$(document).ready( function()
{
	window.slideshow = new Slideshow();
	window.slideshow.init();
	window.slideshow.start();

	/*upon link click, transition to other page*/
	$("#navlist").on("click", "a", function(){
		var dst_file = this.getAttribute("href");
		var src_file = window.location.pathname;

		/*update url for dynamic usage*/
		if( history.pushState )
		{
			history.pushState(null, null, dst_file);
		} //end if

		window.slideshow.stop();
		loadNewContent(src_file,dst_file);
		return false;
	});

	/*requires refactor*/
	$("#box-container").on("click", "a", function(){
		var dst_file = this.getAttribute("href");
		var src_file = window.location.pathname;
		/*update url for dynamic usage*/
		if( history.pushState )
		{
			history.pushState(null, null, dst_file);
		} //end if

		window.slideshow.stop();
		loadNewContent(src_file,dst_file);
		return false;
	});

	/*requires refactor*/
	$("#page-head").on("click", "a", function(){
		var dst_file = this.getAttribute("href");
		var src_file = window.location.pathname;

		/*update url for ajax support*/
		if( history.pushState )
		{
			history.pushState(null, null, dst_file);
		} //end if

		loadNewContent(src_file,dst_file);
		return false;
	});
});