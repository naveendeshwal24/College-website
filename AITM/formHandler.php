// php code to send the mail to the visitor of our site
<?php
View information gathering
$name=$_post['name'];
$Viewer_email=$_post['email'];
$subject=$_post['subject'];
$message=$_post['message'];
 
 // sender information
$email_from="aitmpalwal@gmail.com";   domain email needs to be here after purchasing the doamin you will get the domain	
$email_subject="New form Submission";
$email_body="User Name: $name.\n",
			"Viewer_email:$email.\n"
			"User message:$message.\n";

// where we want to get the views information 
$to='naveendeshwal1998@gmail.com';
$headers= "From: $email_from \r\n";
$headers ="Reply To: $view_email"


mail($to,$email_sbject,$email_body,$headers);

headers("Location: Contact.html");
?>