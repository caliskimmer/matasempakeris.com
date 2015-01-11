//button object constructor

function Button(direction)
{
	this.prototype = Object.prototype;
	
	if( direction === "left" )
	{
		this.button = "#arrow-left";
		this.direction = "left";
	} //end if

	else
	{
		this.button = "#arrow-right";
		this.direction = "right";
	} //end else
} //end function