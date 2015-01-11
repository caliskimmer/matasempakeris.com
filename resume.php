<!DOCTYPE html>
<html>
<head>
	<title>ME >> Resume</title>
	<link rel="stylesheet" type="text/css" href="global.css">
	<!--[if lt IE 9]>
	<link rel="stylesheet" type="text/css" href="global-ie8.css" />
	<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/r29/html5.min.js"></script>
	<![endif]-->
	<noscript>Javascript is off. This is a test</noscript>
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
		<section id="content-wrapper">
			<section id="content-resume"> <!-- may add a class for similar contents -->
				<h1 class="container-title" id="resume-title">Resume</h1>
				<br/>
				<img src="res/resume.png"/>
				<br/>
				<a href="https://www.dropbox.com/s/2zs3yzlnz6rkv6y/Resume-Official-Public.docx?dl=1">Click here to download my resume</a>
			</section>
		</section>
	</div>

	<?php
		include("footer.inc.html");
	?>
</body>
</html>