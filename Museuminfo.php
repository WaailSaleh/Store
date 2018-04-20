<?php
require_once('museum.php');
require_once('connect.php');
        $query = "SELECT * FROM Museums WHERE Name = '" . $_POST['Name'] . "' ;";
        $response = @mysqli_query($conn, $query);
         if ($response) {
                $row = mysqli_fetch_array($response);
                $currentm = new Museums($row['ID'], $row['Name'],$row['Year'],$row['Location'],$row['Architects'],$row['History'],$row['Work'],$row['source']);
         echo json_encode($currentm);
        } else echo "not working : " . $query;

?>
