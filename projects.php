<!DOCTYPE html>
<html>
<head>
	<title>ME >> Home</title>
	<link rel="stylesheet" type="text/css" href="global.css">
	<!--[if lt IE 9]>
	<link rel="stylesheet" type="text/css" href="global-ie8.css" />
	<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/r29/html5.min.js"></script>
	<![endif]-->
	<noscript> Javascript is off. This is a test</noscript>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

</head>
<body>
	<div id="wrapper">
		<?php
			include("header.inc.html");
		?>

		<section id="content-wrapper">
			<section id="content-projects">
				<h1 class="container-title">Projects</h1>
				
				<form>
					<input id="selected-project" type="hidden" value="">
					<input id="last-project" type="hidden" value="">
				</form>
				
				<section id="project-main-imgs">
					<ul>
						<li id="MetroidSmash"><a href="http://www.youtube.com/watch?v=K7MzJTUW5YU"><img src="res/metroidsmash-projects.png" /></a></li>
						<li id="CyberCrunch"><img src="res/cybercrunch-projects.png" /></li>
						<li id="GoosensteinNestingSeason"><a href="https://github.com/Uberi/Goosenstein"><img src="res/goosenstein-projects.png" /></a></li>
						<li id="matasempakeriscom"><a href="https://github.com/caliskimmer/mempakeris.com"><img src="res/matasempakeriscom-projects.jpg" /></a></li>
						<li id="BluehammerAppStudio"><a href="https://github.com/caliskimmer/BHweb-app"><img src="res/bluehammerappstudio-projects.png" /></a></li>
					</ul>
					<div id="project-name-container">
					<ul>
						<li class="project-name" id="BluehammerAppStudioProjName">Bluehammer App Studio</li>
						<li class="project-name" id="matasempakeriscomProjName">matasempakeris.com</li>
						<li class="project-name" id="GoosensteinNestingSeasonProjName">Goosenstein: Nesting Season</li>
						<li class="project-name" id="CyberCrunchProjName">Cyber Crunch</li>
						<li class="project-name" id="MetroidSmashProjName">Metroid Smash</li>
					</div>
				</section>

				<section id="description-list">
					<ul>
						<li class="description" id="BluehammerAppStudioDescription">
						The Bluehammer App Studio was written for the startup Bluehammer, located in sunny San Diego, CA. The purpose of the app is to help potential clients specify their order options for the custom 
						app that Bluehammer will build for them. The project was written using HTML5, CSS3, Javascript, and the JQuery framework. The order link takes the user to a payment processing system, which, when
						finished, will allow the client to pay in multiple ways. I intend to write this portion in PHP.</li>
						<li class="description" id="matasempakeriscomDescription">
							matasempakeris.com is an ongoing project containing my portfolio of projects and resume. The website was written using the jquery library, html5, css3, and pure javascript. This is my first web development 							project. The second version will introduce a content management system written in PHP for ease of uploading images and altering descriptions.
						</li>
						<li class="description" id="GoosensteinNestingSeasonDescription">
						Goosenstein is an action-packed 2D sidescroller,
						 written for HackWATERLOO 2014 in Lua and using the LOVE2d library. Not only was this my first hackathon, but the project won the rookie award, a $200 dollar prize for our 4-person team. It
						 features custom graphics, voice narration provided by a University of Waterloo professor, and
						 a plot based around the heavy Canada goose population on campus.</li>
						<li class="description" id="CyberCrunchDescription">
							Cyber Crunch is a <i>Collapse</i> clone written in 
							Objective-C using the Cocos2d library. The
							game was created for the purpose of demonstrating iPhone development skills and understanding of recursion in
							our AP Computer Science class. It was my first
							successful dive into Objective-C and iPhone development.
						</li>
						<li class="description" id="MetroidSmashDescription">
							Metroid Smash was written for my AP Computer
							Science class, which required us to write a game in Java. Metroid smash is a two-dimensional <i>beat 'em up</i> 
							game based on the wireframe survival mode present in the <i>Super Smash Bros.</i> series.</li>
					</ul>
				</section>

				<div id="c-line-break"></div>
				<!--<div id="highlight"></div> -->
				<section id="project-thumbs">
					<ul id="project-imgs">
						<li><img id="BluehammerAppStudioThumb" src="res/bluehammerappstudio-thumb.png" />
							<div>Bluehammer App Studio</div></li>
						<li><img id="matasempakeriscomThumb" src="res/matasempakeriscom-projects-thumb.jpeg" />
							<div>matasempakeris.com</div></li>
						<li><img id="GoosensteinNestingSeasonThumb" src="res/goosenstein-projects-thumb.png" />
							<div>Goosenstein: Nesting Season</div></li>
						<li><img id="CyberCrunchThumb" src="res/cybercrunch-projects-thumb.png" />
							<div>Cyber Crunch</div></li>
						<li><img id="MetroidSmashThumb" src="res/metroidsmash-projects-thumb.png" />
							<div>Metroid Smash</div></li>
					</ul>
				</section>
			</section>
		</section>

	</div>

	<?php
		include("footer.inc.html");
	?>
</body>

<script src="project_img_click_action_bridge.js"></script>
<script src="project_main_image_change_animation.js"></script>
<script src="ajax.js"></script>
</html>