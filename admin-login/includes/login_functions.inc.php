<?php #login_functions.inc..php - Just some helpers...
	function check_login()
	{
		require('mysqli_connect.php');
	
		$errors = array();
	
		if( empty($_POST["username"]))
		{
			$errors[] = "Username is empty. Please give one.";
		}
		
		else
		{
			$username = mysqli_real_escape_string($dbc,trim($_POST["username"]));
		}
		
		if( empty($_POST["pass"]))
		{
			$errors[] = "Password is empty. Please give one.";
		}
		
		else
		{
			$password = mysqli_real_escape_string($dbc,trim($_POST["pass"]));
		}
		
		//no problems occurred
		if( empty($errors))
		{
			$q = "SELECT user_id FROM users WHERE username='$username' AND pass=SHA1('$password')";
			
			$r = @mysqli_query($dbc, $q);
			
			if( mysqli_num_rows($r) == 1 )
			{
				$row = mysqli_fetch_array($r, MYSQLI_ASSOC);
				
				return array(true, $row);
			}
			
			else
			{
				$errors[] = "Your username and password combination did not match";
			}
		} //end if
		
		return array(false, $errors);
	} //end function()
?>