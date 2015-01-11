function FadeAnimation()
{
	var self = this;
	self.UNIQUE_TIMER = 0;
	self.op = 0;
	self.fadeIn = function(e)
	{
		if(!e)
		{
			var e = window.event;
		} //end if

		//sets element based on if browser is IE or not
		var elem = (e.target) ? e.target:e.srcElement;
		console.log("THIS IS ELEM: " + elem);
		self.op = 0.5;
		clearInterval(self.UNIQUE_TIMER);
		//Support for IE7/8
		elem.style.opacity = self.op;
		elem.style.filter = "alpha(opacity=" + self.op + ")";

		self.UNIQUE_TIMER = setInterval(function()
		{
			console.log("Fading in!: " + self.op + " WITH ELEM: " + elem.src);
			if( parseFloat(elem.style.opacity) >= 1.0 )
			{
				clearInterval(self.UNIQUE_TIMER);
			} //end if

			self.op = self.op + 0.1;
			//Support for IE7/8
			elem.style.opacity = self.op;
			elem.style.filter = "alpha(opacity=" + self.op*100 + ")";
			console.log("OP4:  " + self.op );
		}, 5000);
	} //end fadeIn

	self.fadeOut = function(e)
	{
		console.log("ELEM: " + e);
		if(!e)
		{
			var e = window.event;
			e.stopPropagation();
		} //end if

		//sets element based on if browser is IE or not
		elem = (e.target) ? e.target:e.srcElement;
		self.op = 1;
		clearInterval(self.UNIQUE_TIMER);
		elem.style.opacity = self.op;
		elem.style.filter = "alpha(opacity=" + self.op + ")";
		self.UNIQUE_TIMER = setInterval(function()
		{
			console.log("ELEMENT: " + elem.src + " opacity: " + self.op);
			if( self.op <= 0.0 )
			{
				console.log(elem.src + " HAS REACHED THE END" );
				clearInterval(self.UNIQUE_TIMER);
			} //end if
			self.op = self.op - 0.1;

			//Support for IE7/8
			elem.style.opacity = self.op;
			elem.style.filter = "alpha(opacity=" + self.op*100 + ")";
		}, 50);
	} //end animationFade
}

