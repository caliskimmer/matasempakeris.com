/*updates active/non-active slide indicator*/
function toggleIndicator(isOff, slideIndex)
{
	var indicator = $("#indicator-list").find("li").eq(slideIndex).find("div");

	if(isOff)
	{
		indicator.removeClass("limg");
		indicator.addClass("limg-on");
	} //end if

	else
	{
		indicator.removeClass("limg-on");
		indicator.addClass("limg");
	} //end else
} //end toggleIndicator()