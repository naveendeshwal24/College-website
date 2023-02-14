<?php

$servername = "localhost";
$user = "root";
$password = "";
$database = "SecretDiary";
 
//  session_start();

 //$error = "";

//  if(array_key_exists("loggedout",$_GET){
//  	unset($_SESSION);
//  	setcookie("id","",time() -60*60);              //to set the cookies to empty after logged out.
//  	$_COOKIE['id']="";
//  }
//  else if(array_diff_assoc("id",$_SESSION) OR array_key_exists("id",$_COOKIE)){
//  		header("Location: StayLoggedIn.php");
//  }

//creating the connection---------
$link = mysqli_connect($servername,$user,$password,$database);

if(mysqli_connect_error())
{
	die("there is an error while creating a connection");
}

if($_POST['submit'])
	$error ="";
if(!$_POST['email']){
	$error .="An email is required"; 
}
if(!$_POST['password']){
	$error .="An password is required"; 
}
if($error != ""){
	$error = "<p>There were an errror(s) in your form</p>".$error;
}
else{
	$query = "SELECT * FROM `SecretDiary` where email = '".mysqli_real_escape_string($link ,$_POST['email'])."'  ";

	$result = mysqli_query($link, $query);
	if(mysqli_num_rows($result) > 0){
		$error = "That email is already taken";
	}
	else{
		$query = "INSERT INTO `secretdiary`(`email`,`password`) VALUES('".mysqli_real_escape_string($link ,$_POST['email'])."','".mysqli_real_escape_string($link ,$_POST['password'])."') ";

		if(!mysqli_query($link, $query)){
			$error = "there is an error while signin up you";
			}
			else{
				$query = "UPDATE SecretDiary SET password = '".md5(md5(mysqli_insert_Id($link)).$_POST['password'])."' WHERE ID = ".mysqli_insert_Id($link)." ";

				mysqli_query($link, $query);    //excuting the query

				// $_SESSION['id'] = mysqli_insert_Id($link);  // fetching the id from $link variable

				// if($_POST['LoggedIn'] == '1'){  // verifying the records for being logged in

				// 	setcookie(mysqli_insert_Id($link),time() + 60*60*24*365);//setting up the cookies to keep them loggeIn
				// }

				// header("Location: SecretDiary.php");
				echo "login Successfully";
			}
	}

}
?>

	<!-- <div id="error"><?php echo $error;  ?></div> -->