<?php
$servername = "localhost:3306";
$username = "database";
$password = "13cAv?i52";
$dbname = "schoolkantine";
$port = 3306; // Specify the port

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
