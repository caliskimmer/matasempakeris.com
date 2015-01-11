<?php #mysqli_connect.php - script to connect to the database

/*
* For development purposes only.
*/
DEFINE('DB_HOST', 'localhost');
DEFINE('DB_NAME', 'resume');
DEFINE('DB_USER', 'root');
DEFINE('DB_PASS', 'nerisneris');


$dbc = @mysqli_connect(DB_HOST,DB_USER, DB_PASS, DB_NAME) or 
		die( "Could not connect to database. Error: " . mysqli_connect_error($dbc));

mysqli_set_charset($dbc, 'utf-8');
