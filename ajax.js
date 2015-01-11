function loadNewContent(src_file,dst_file)
{
	try
	{
		if( src_file === "/projects.php" )
		{
			var scriptObjs = document.body.getElementsByTagName('script');
			if( document.body.getElementsByTagName('script').length > 0 )
			{
				for( var index = 0; index < scriptObjs.length; index++ )
				{
					scriptObjs[index].parentNode.removeChild(scriptObjs[index]);
				} //end for
			} //end if
		} //end if

		$("#content-wrapper").fadeOut(500,function()
		{
			/*If we are on the same page, apply effect, but don't load other content*/
			if( src_file !== "/" + dst_file )
			{
				if( dst_file !== 'index.php')
				{
					window.slideshow.stop();
				} //end if

				$(this).load(dst_file + " #content-" 
				+ dst_file.replace('.php',''), function()
				{
					/*After loading, but before displaying index.php prepare slide title*/
					/*Note: This really should be refactored*/
					if( $("#slidehead").length > 0 )
					{
						$("#slidehead").find("div:gt(0)").hide();
					} //end if

					$(this).fadeIn(500, function()
					{
						//run script after ajax loads projects.php
						if( dst_file === 'projects.php' )
						{
							//NOT FUNCTIONAL
							/*script = document.createElement('script');
							script.setAttribute('src', 'fade_animations.js');
							document.body.appendChild(script);

							var script = document.createElement('script');
							script.setAttribute('src', 'list_opacity.js');
							document.body.appendChild(script);*/

							script = document.createElement('script');
							script.setAttribute('src', 'project_main_image_change_animation.js');
							document.body.appendChild(script);

							/*script = document.createElement('script');
							script.setAttribute('src', 'projects_highlight_div_movement.js');
							document.body.appendChild(script);*/

							script = document.createElement('script');
							script.setAttribute('src', 'project_img_click_action_bridge.js');
							document.body.appendChild(script);
						} //end if
				});

				if( dst_file === 'index.php')
				{
					window.slideshow.start();
				} //end if
				})
			} //end if

			else
			{
				$(this).fadeIn(300);
			}
		});
	} //end try

	catch(err)
	{
		console.log("error in ajax execution");
		throw err;
	} //end catch
} //end function()