function Slideshow()
{
	this.prototype = Object.prototype;
	var _left = new Button("left");
	var _right = new Button("right");
	var _numSlides = $("#indicator-list").find("li").length;
	var _currentSlideNumber = 0;

	/*determines and updates the slideNumber we are currently seeing*/
	function updateSlideIndicator(direction)
	{
		toggleIndicator(false, _currentSlideNumber);
		if( direction === "right")
		{
			if( _currentSlideNumber === _numSlides-1 )
			{
				_currentSlideNumber = 0;
			} //end if

			else
			{
				_currentSlideNumber++;
			} //end else
		} //end if

		else if( direction === "left" )
		{
			if( _currentSlideNumber === 0 )
			{
				_currentSlideNumber = _numSlides-1;
			} //end if

			else
			{
				_currentSlideNumber--;
			} //end else
		} //end else if

		toggleIndicator(true, _currentSlideNumber);
	}

	/*sliding animation (one slide) with params for timing and direction of slide*/
	function slide(direction, dt)
	{

		if( direction === "right")
		{
			$("#imglist").find("li:first")
			.css("left", "950px")
			.appendTo("#imglist")
			.animate({"left":"0px"}, dt, function()
				{
					$(this).removeAttr('style'); //Random question: Performance increase?
				});
		} //end if

		if( direction === "left")
		{
			$("#imglist").find("li:last")
			.animate({"left":"950px"}, dt, function()
			{
				var elem = $(this);
				$(this).remove();
				elem.prependTo("#imglist");
				elem.removeAttr('style');
			});
		} //end 
	} //end function

	/*slideshow head title change w/ direction and transition time spec*/
	function titleChange(direction, dt)
	{
		if( direction === "left")
		{
			$("#slidehead").find("div:first")
			.fadeOut(dt)
			.next()
			.fadeIn(dt)
			.end()
			.appendTo("#slidehead");
		} //end if

		else if( direction === "right" )
		{
			$("#slidehead").find("div:first")
			.fadeOut(dt);

			$("#slidehead").find("div:last")
			.prependTo("#slidehead")
			.fadeIn(dt);
		} //end else if
	} //end function

	/*Performs slide transition and passed to timer*/
	function transitionUpdate()
	{
		if(!_left && !_right)
		{
			left = new button("left");
			right = new button("right");
		} //end if

		updateSlideIndicator("right")
		slide("left", 2000);
		titleChange("left", 2000);
	} //end function()

	/*Starts the slideshow*/
	this.init = function()
	{
		_left = new Button("left");
		_right = new Button("right");
		$("#slidehead").find("div:gt(0)").hide();

		$("#content-wrapper").on("click",_left.button,function()
		{
			clearInterval(window.timer);
			slide("right", 500);
			titleChange("right", 500);

			window.timer = setInterval( transitionUpdate, 7500);
			updateSlideIndicator("left");
		});

		$("#content-wrapper").on("click",_right.button,function()
		{
			clearInterval(window.timer);

			slide("left", 500);
			titleChange("left", 500);

			window.timer = setInterval( transitionUpdate, 7500);
			updateSlideIndicator("right");
		});
	}; //end init

	/*freezes slideshow*/
	this.stop = function()
	{
		_currentSlideNumber=0;
		clearInterval(window.timer);
		window.timer = false;
	} //end stop()

	this.start = function()
	{
		/*hides image titles behind the first img*/
		window.timer = setInterval( transitionUpdate, 7500);
	} //end start()

	this.isStopped = function()
	{
		if(!window.timer)
		{
			return false;
		} //end if

		return true;
	} //end isStopped()
} //end constructor