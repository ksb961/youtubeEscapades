<?php
//When the user sends a suggestion it sends it to my work e-mail
//with the subject: Suggestion Box!
$myemail = 'tinkthemadscientist@gmail.com'
if(empty$_POST['suggestion'])
{
	$error .= "\n Error: Suggestion Field is Empty";
}
$suggestion = $_POST['suggestion'];
if(empty($errors))
{
	$to = $myemail;
	$subject = "Suggestion Box!";
	$email_body = "You have received a new suggestion! \n \n $suggestion";
	$headers = "From: The Experiments";
	mail($to, $email_subject, $email_body, $headers);
	header('Location: Index.html');	
}
?>