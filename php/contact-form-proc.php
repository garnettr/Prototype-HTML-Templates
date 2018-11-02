<?php

	if(empty($_POST['submit'])) 
	{
		echo "Form is not submitted!";
		exit;
	}

	if(empty($_POST["firstName"]) || 
			empty($_POST["email"])) 
			{
				echo "Please fill in the form"
				exit;
			}

	$name_1 = $_POST["firstName"];
	$name_2 = $_POST["lastName"];
	$email = $_POST["email"];


mail( 'designpxls@gmail.com' , 'New Form Submission' , 
	"New form submission: Name: $firstName, Email: $email" );

header('location: thank-you.html');

?>