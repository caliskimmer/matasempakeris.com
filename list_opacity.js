var projImgContainer = document.getElementById('project-imgs');
var listItems = projImgContainer.getElementsByTagName('img');
var animations = [];



//attach event handlers to all
for( var index = 0; index < listItems.length; index++ )
{
	animations[index] = new FadeAnimation();
	console.log("OBJ: " + animations[index]);
	listItems[index].onmouseover = animations[index].fadeIn;
	listItems[index].onmouseout = animations[index].fadeOut;
} //end for