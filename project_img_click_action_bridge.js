var projectThumbs = document.getElementById("project-imgs").getElementsByTagName("img");

for( var index = 0; index < projectThumbs.length; index++ )
{
	projectThumbs[index].onclick = function(e){
									mainImageChangeAnimation(e);
									//highlight.move(e);
									};	
} //end for