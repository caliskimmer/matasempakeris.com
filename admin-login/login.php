<?php
	if( $_SERVER['REQUEST_METHOD'] == 'POST')
	{
		include('includes/login_functions.inc.php');
		
		$data = check_login();
		
		if( $data[0] == true )
		{
			//redirect to the cms from the login page
			header("Location: http://misite:8888/cms.php");
		} //end if
		
		else
		{
			$errors = $data[1];
			
			foreach( $errors as $error)
			{
				echo "<p class='error'>- " . $error . "</p>";
			}	
		}
	} //end if
?>

<!DOCTYPE html>

<html>
	<head>
		<title>Administrator Login</title>
		<link rel="stylesheet" type="text/css" href="includes/admin.css">
	</head>
	
	<body>
		<section id="container">
			<div id="login-box">
				<div id="box-title">Login</div>
				<div id="login-form">
					<form action="login.php" method="post">
						<label>Username</label><br />
						<input type="text" name="username" value="<?php if( isset($_POST['username'])) echo $_POST['username']?>"
							placeholder="Enter username" />
						<br />
						<label>Password</label><br />
						<input type="password" name="pass"
							placeholder="Enter password" />
						<br />
						<input id="login-submit" type="Submit" value="Login" />
					</form>
				</div>
			</div>
		</section>
	</body>
</html>