<?php
// setting up parameters
$servername = "localhost";
$user = "root";
$password = "";
$database = "aitm";
 
 $error = "";

//creating the connection---------
$link = mysqli_connect($servername,$user,$password,$database);

if(mysqli_connect_error())
{
	die("there is an error while creating a connection");
}

if($_POST['submit'])
	$error ="";
if(!$_POST['Username']){
	$error .="An Username is required"; 
}
if(!$_POST['Email']){
	$error .="An Email is required"; 
}
if(!$_POST['Message']){
	$error .="An Message is required"; 
}
if($error != ""){
	$error = "<p>There were an errror(s) in your form</p>".$error;
}
else{
	$query = "SELECT * FROM `blog_page_table` where Email = '".mysqli_real_escape_string($link ,$_POST['Email'])."'  ";

	$result = mysqli_query($link, $query);
	if(mysqli_num_rows($result) > 0){
		$error = "That email is already taken";
	}
	else{
		$query = "INSERT INTO `blog_page_table`(`Username`,`Email`,`Message`) VALUES(
			'".mysqli_real_escape_string($link ,$_POST['Username'])."',
			'".mysqli_real_escape_string($link ,$_POST['Email'])."',
			'".mysqli_real_escape_string($link ,$_POST['Message'])."') ";		

				mysqli_query($link, $query);    //excuting the query

				header("Location: Home.html");
				echo "Record Updated Successfully";						
	    }   
	}
?>
	<div id="error"><?php echo $error;  ?></div> 