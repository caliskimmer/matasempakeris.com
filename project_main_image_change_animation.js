/*
 * On thumbnail click, update main img and description
 */

//Create vars linked to list items for each group in projects.html
var projectMainList = document.getElementById("project-main-imgs").getElementsByTagName("ul")[0];
var projectMainListElems = projectMainList.getElementsByTagName("li");
var selectedThumb = document.getElementById("selected-project");
var lastThumb = document.getElementById("last-project");

selectedThumb.value = projectMainListElems[projectMainListElems.length-1].id;

var fadeAnimation = function(type,el,op)
{
	var timer;
	var _fade = function()
	{
		if( type === "in")
		{
			if( parseFloat(op) >= 1.0)
			{
				clearInterval(timer);
			} //end if

			op += 0.1;
			el.style.opacity = op;
			el.style.filter = "alpha(opacity=" + op*100 + ")";
		} //end if

		else if( type === "out")
		{
			if( parseFloat(op) <= 0.0 )
			{
				clearInterval(timer);
			} //end if

			op -= 0.1;
			el.style.opacity = op;
			el.style.filter = "alpha(opacity=" + op + ")";
		} //end else if
	} //end _fade()

	timer = setInterval(function()
	{
		_fade();
	}, 50);
} //end fadeAnimation()

/*OnClick action*/
var mainImageChangeAnimation = function(e)
{
	e = e || window.event;
	elem = (e.target) ? e.target:e.srcElement;
	
	//If Thumb is present in the clicked element
	//Set second hidden input to the element before the transition
	if( e.target.id.indexOf("Thumb") > -1 )
	{
		lastThumb.value = selectedThumb.value;
		selectedThumb.value = e.target.id.substring(0,e.target.id.indexOf("Thumb"));
	}

	//store target images in variables
	var targetMainImg = document.getElementById(selectedThumb.value);
	var targetMainName = document.getElementById(selectedThumb.value+"ProjName");
	var targetMainDesc = document.getElementById(selectedThumb.value+"Description");
	var lastMainDesc = document.getElementById(lastThumb.value+"Description");
	var lastMainName = document.getElementById(lastThumb.value+"ProjName");
	var opacity = 0.0;

	/*********fadeIn main image**********/
	targetMainImg.style.opacity = opacity;
	targetMainImg.style.filter = "alpha(opacity=" + opacity + ")";
	projectMainList.appendChild(targetMainImg);

	fadeAnimation("in",targetMainImg, opacity);
	/**********************************/

	/*****fadeOut old description and project name******/
	opacity = 1.0;
	lastMainDesc.style.opacity = opacity;
	lastMainName.style.opacity = opacity;

	//for ie 8 only to change opacity
	lastMainDesc.style.filter = "alpha(opacity=" + opacity + ")";
	lastMainName.style.filter = "alpha(opacity=" + opacity + ")";

	fadeAnimation("out", lastMainDesc, opacity);
	fadeAnimation("out", lastMainName, opacity);
	/**********************************/

	/*****fadeIn new description and project name******/
	opacity = 0.0;
	fadeAnimation("in", targetMainDesc, opacity);
	fadeAnimation("in", targetMainName, opacity);
	/*********************************/
} //end function()