<!DOCTYPE html>
<html>
<head>
	<title>ME >> Resume</title>
	<link rel="stylesheet" type="text/css" href="global.css">
	<!--[if lt IE 9]>
	<link rel="stylesheet" type="text/css" href="global-ie8.css" />
	<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/r29/html5.min.js"></script>
	<![endif]-->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="button.js"></script>
	<script src="indicator.js"></script>
	<script src="ajax.js"></script>
</head>

<body>
	<div id="wrapper">
		<?php
			include("header.inc.html");
		?>

		<section id="content-info">
			<img id="info-profile-pic" src="res/profile.jpg" />
			<div id="vertical-line"></div>
			<h1 class="container-title">About</h1>
			<article class="description">
				My name is Matas Empakeris and I love the world of computer science. From theoretical computer science to applied technologies, I love the thinking involved in solving problems we face with technology. The only problem is that there is TOO much out there to enjoy; however, I have an interest above all others: web development. As the internet becomes vital for everyday tasks, I feel web development is not only amazing, but also a part of our future. But I'm not talking about basic html/css/jquery. I LOVE diving into details and KNOWING how things work. This website is my first big project in web development. Everything here was built from scratch (including almost all of the graphics) with the only assistance coming from the jQuery library. The projects page is written entirely in native javascript.
			</article>
		</section>


	</div>

	<?php
		include("footer.inc.html");
	?>
</body>
</html>