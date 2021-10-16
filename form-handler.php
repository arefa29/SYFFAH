<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'arefa2001@gmail.com';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n"
"User Email: $visitor_email.\n"
"Subject: $subject.\n"
"Message: $message.\n"

$to = 'arefa2001@gmail.com';
$headers = "rom: $email_from \r\n";
$headers = "Reply-to: $visitor_email \r\n";

mail($to, $email_subject, $email_body, $headers );

header("Location: contact.html")

?>