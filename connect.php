<?php
$servername = "localhost";
$username = "wsaleh";
$password = "yighKurj";
$database = "wsaleh";
// Create connection
$conn =  @mysqli_connect($servername, $username, $password, $database);

// Check connection
if ( mysqli_connect_errno() ) {

        // die() is equivalent to exit()
        die( mysqli_connect_error() );
}

?>