<?php
//if(isset($_POST['search']) && !empty($_POST['search'])) {
require_once('connect.php');
require_once('artist.php');
require_once('artwork.php');
//$search =preg_replace("#[0-9a-zA-Z ]#", "", $_POST['search']) ;
$search = "Mona";
$query = "SELECT * FROM Artists WHERE Name LIKE '" $search . "%' ;";
	$Artists = [];
	$response = @mysqli_query($conn, $query);
	if ($response) 
	{
         	while($row = mysqli_fetch_array($response))
 		{
 			$Artists = new Artist($row['ID'], $row['Name'],$row['Life'],$row['Lived'],$row['Genre'],$row['Fame'],$row['ArtistSource']);
		}
    }
    $query = "SELECT * FROM ArtWorks WHERE Title LIKE %'" . $search . "' ;";
	$Artworks = [];
	$response = @mysqli_query($conn, $query);
	if ($response) 
	{
         	while($row = mysqli_fetch_array($response))
 		{
 			$Artworks = new Artwork($row['ID'], $row['Title'],$row['Year'],$row['Location'],$row['Genres'],$row['Price'],$row['source'],$row['ArtistID'],$row['Paint'],$row['Dimensions']);
		}
	$Total = [];
    $Total = $Artists;
    $Total = $Artworks;
    echo json_encode($Total);
	}
	else { echo "not working";}

    


?>