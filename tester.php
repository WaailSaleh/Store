<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
  </head>
  <body> 
<?php
 
$x= "Louvre Palace";

require_once('connect.php');
require_once('museums.php');
        $query = "SELECT * FROM Museums WHERE Name =  'Louvre Palace'  ;";
        echo $query;
    //    $response = @mysqli_query($conn, $query);
      //  echo $response;
        // if ($response) {
          //      $row = mysqli_fetch_array($response);
            //    $currentArt = new Museums($row['ID'], $row['Name'],$row['Year'],$row['Location'],$row['Architects'],$row['History'],$row['Work'],$row['source']);
       //  echo $currentArt;
       // } else echo "not working : " . $query; 
    ?>

   <br>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  
</body>
</html>
