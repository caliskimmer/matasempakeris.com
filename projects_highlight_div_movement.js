var highlight = {
	div: document.getElementById("highlight"),
	HEIGHT:117,
	WIDTH:200,
	top:603,
	left:43,
	MARGIN_DX:30,
	MARGIN_DY:50,
	srcCol:1,
	srcRow:1,

	setNewProperties: function(col,row,left,top)
	{
		highlight.srcCol = col;
		highlight.srcRow = row;
		highlight.left = left;
		highlight.top = 603;
	}, //end setNewScrColScrRow

	move: function(e)
	{
		if(!e)
		{
			e = window.event();
		} //end if

		elem = (e.target) ? e.target:e.srcElement;
		var dstCol = elem.id.substring(6);
		var dstRow = elem.id.substring(5,6);
		var xMovement = (dstCol-highlight.srcCol)*(highlight.MARGIN_DX+highlight.WIDTH);
		var yMovement = (dstRow-highlight.srcRow)*(highlight.MARGIN_DY+highlight.HEIGHT);

		console.log("DST COL: " + dstCol);
		console.log("DST ROW: " + dstRow);
		console.log("LEFT: " + highlight.left);
		console.log("TOP: " + highlight.top);
		console.log("XMOVEMENT: " + xMovement);
		console.log("YMOVEMENT: " + yMovement + "\n\n\n");

		var moveAnimation = function(dx,dy,left,up)
		{
			if(dx != 0 )
			{
				var currentLocation = highlight.left;
				var finalLocation = highlight.left + dx;

				/*perform left or right highlight movement every 50ms until
				destination image reached*/

				var timer = setInterval( function()
				{

					if(currentLocation === finalLocation)
					{
						clearInterval(timer);
						highlight.setNewProperties(dstCol, dstRow, parseInt(highlight.div.style.left), highlight.top);
					} //end if

					if( left )
					{
						currentLocation -= 1;
					} //end if

					else
					{
						currentLocation += 1;
					}

					highlight.div.style.left = currentLocation.toString() + "px";
				},1);
			}

			if( dy != 0 )
			{
				var currentLocation = highlight.top;
				var finalLocation = highlight.top + dy;

				/*perform up or down highlight movement every 50ms until
				destination image reached*/

				var timer = setInterval( function()
				{
					if( currentLocation === finalLocation )
					{
						clearInterval(timer);
						highlight.setNewProperties(dstCol, dstRow, highlight.left, parseInt(highlight.div.style.top));
					}

					if( up )
					{
						currentLocation -= 1;
					}

					else
					{
						currentLocation += 1;
					}

					highlight.div.style.top = currentLocation.toString()+"px";
				}, 1);
			} //end if
		} //end moveAnimation

		/*
		 *Perform movement animation in the respective diretions
		 */

		if( xMovement < 0 && yMovement < 0 )
		{
			moveAnimation(xMovement, yMovement, true, false);
		} //end if

		else if( xMovement > 0 && yMovement < 0 )
		{
			moveAnimation(xMovement, yMovement, false, false);
		} //end else if

		else if( xMovement > 0 && yMovement > 0 )
		{
			moveAnimation(xMovement, yMovement, false, true);
		} //end else if

		else if( xMovement < 0 && yMovement > 0 )
		{
			moveAnimation(xMovement, yMovement, true, true);
		} //end else if

		else if( xMovement < 0 && yMovement === 0 )
		{
			moveAnimation(xMovement, yMovement, true, false);
		} //end else if

		else if( xMovement > 0 && yMovement === 0 )
		{
			moveAnimation(xMovement, yMovement, false, false);
		} //end else if

		else if( xMovement === 0 && yMovement < 0 )
		{
			moveAnimation(xMovement, yMovement, false, true);
		} //end else if

		else if( xMovement === 0 && yMovement > 0 )
		{
			moveAnimation(xMovement, yMovement, false, false);
		} //end else if

		//destination column and row become the src Column and Row
	} //move
}