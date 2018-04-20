$(document).ready(function() {
 var n = "Pablo Picasso";


 $.post("artist.php",
    {
        name : n ,
        method : "getArtist"
    },
    function(data){
        console.log("Data: " + data + "\nStatus" + status);
    });
});


function getMuseum()
{
require_once('connect.php');
require_once('museums.php');
        $query = "SELECT * FROM Museums WHERE Name = '" . $_POST['name'] . "' ;";
        $response = @mysqli_query($conn, $query);
         if ($response) {
                $row = mysqli_fetch_array($response);
                $currentArt = new Museums($row['ID'], $row['Name'],$row['Year'],$row['Location'],$row['Architects'],$row['History'],$row['Work'],$row['source']);
         echo json_encode($currentArt);
        } else echo "not working : " . $query;
}