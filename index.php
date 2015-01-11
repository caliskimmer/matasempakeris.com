<!DOCTYPE html>
<html>
<head>
	<title>ME >> Home</title>
	<link rel="stylesheet" type="text/css" href="global.css">
	<!--[if IE 8]>
	<link rel="stylesheet" type="text/css" href="global-ie8.css" />
	<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/r29/html5.min.js"></script>
	<![endif]-->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="slideshow.js"></script>
	<script src="runner.js"></script>
	<script src="button.js"></script>
	<script src="indicator.js"></script>
	<script src="ajax.js"></script>
</head>

<body>
	<!--[if lt IE 8]>
		<br />
		<br />
		<h1>This website does not support your browser. Please upgrade or switch to another.</h1>
		<![endif]-->
		
	<!--[if IE 8]>
	<div id="bg"><img src="res/main.jpg" /></div>	
	<![endif]-->
	
	<div id="wrapper">
		<?php
			include("header.inc.html");
		?>
		
		<section id="content-wrapper">
			<section id="content-index">
				<section id="slideshow">
					<header id="slidehead">
						<div class="text-container">
							<h1>Bluehammer App Studio (2014)</h1>
						</div>
						<div class="text-container">
							<h1>matasempakeris.com (2014)</h1>
						</div>
						
						<div class="text-container">
							<h1>Goosenstein: Nesting Season (2014)</h1>
						</div>

						<div class="text-container">
							<h1>Cyber Crunch (2012)</h1>
						</div>

						<div class="text-container">
							<h1>Metroid Smash (2012)</h1>
						</div>
					</header>
					<div id="arrow-left"></div>
					<div id="arrow-right"></div>

					<ul id="indicator-list">
						<li class="indicator"><div class="limg-on"></div></li>
						<li class="indicator"><div class="limg"></div></li>
						<li class="indicator"><div class="limg"></div></li>
						<li class="indicator"><div class="limg"></div></li>
					</ul>

					<ul id="imglist">
						<li>
							<a href="http://www.youtube.com/watch?v=K7MzJTUW5YU"><img src="res/metroid_smash.jpg" /></a>
						</li>
						<li><img src="res/CyberCrunchSlide.png"/></li>
						<li>
							<a href="https://github.com/Uberi/Goosenstein"><img src="res/goosenstein.png"/></a>
						</li>
						<li>
							<a href="https://github.com/caliskimmer/mempakeris.com"><img src="res/matasempakeris.com_slide.jpg"/></a>
						</li>
						<li>
							<a href="https://github.com/caliskimmer/BHweb-app"><img src="res/bluehammerappstudio.png" /></a>
						</li>
					</ul>
				</section>
			
				<section id="box-container">
					<section id="Resume-box" class="box">
						<div class="boxtext">Resume</div>
						<div class="text-bg"><a href="resume.php">Click here to go to the resume page. 
							It is constantly being updated with
						new projects, classes, and skills I have picked up.</a></div>
					</section>

					<section id="Intro-box" class="box">
						<div class="boxtext">Intro</div>
						<div class="text-bg"><a href="info.php">Click here for a quick introduction of yours truly :p</a></div>
					</section>

					<section id="Project-box" class="box">
						<div class="boxtext">Projects</div>
						<div class="text-bg"><a href="projects.php">Click here to go to the projects page. This area contains
							a portfolio of my major projects since 2012 and links to their respective
							GitHub and/or YouTube pages</a></div>
					</section>
				</section>
			</section>
		</section>

	</div>

	<?php
		include("footer.inc.html");
	?>
</body>
</html>