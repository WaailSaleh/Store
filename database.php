<?php

if(isset($_POST['method']) && !empty($_POST['method'])) {
    $method = $_POST['method'];
    if($method == "muse")
    {
    getMuseum();
    }
    if($method == "getm")
    {
     getMuseum();
    }
    if($method == "table")
    {
     getTable();
    }
    if($method == "getArt")
    {
     getArt();
    }
    if($method == "getArtist")
	{
	 getArtist();
	}
	if($method == "getArtistWid")
    {
        getArtistWid();
    }
	if($method == "Headers")
	{
     getHeaders();
    }
    if($method == "search")
    {
        Search();
    }   
}

function museSel(){
require_once('connect.php');

}


function getHeaders()
{   require_once('connect.php');
    require_once('artist.php');
    require_once('artwork.php');
    $query = "select Column_name  from Information_schema.columns  where Table_name = '" . $_POST['table'] ."' ;";
                        $response = @mysqli_query($conn, $query);
                        
                        if ($response) {
                         $array = array();
                         while ($row = mysqli_fetch_array($response))
                             {
                                   $array[] = $row;
                                }
                              echo json_encode($array);
                         } else echo "not working getHeaders : " . $query;
}

function getTable()
{
    require_once('artist.php');
    require_once('artwork.php');
    require_once('connect.php');
    $query = "SELECT * FROM " . $_POST['table'] ." ;";
    $response = @mysqli_query($conn, $query);
         if ($response) {
             $array = array();
    while ($row = mysqli_fetch_array($response))
        {
           $array[] = $row;
        }
         
           echo json_encode($array);
        } else echo "not working getTable : " . $query;

}

function getArtist()
{
require_once('connect.php');
require_once('artist.php');
	$query = "SELECT * FROM Artists WHERE Name = '" . $_POST['name'] . "' ;";
	$response = @mysqli_query($conn, $query);
         if ($response) {
         	$row = mysqli_fetch_array($response);
 		$currentArtist = new Artist($row['ID'], $row['Name'],$row['Life'],$row['Lived'],$row['Genre'],$row['Fame'],$row['ArtistSource']);
         echo json_encode($currentArtist);
	} else echo "not working : " . $query;

}

function getMuseum()
{

require_once('museums.php');
require_once('connect.php');
        $query = "SELECT * FROM Museums WHERE Name = '" . $_POST['Name'] . "' ;";
        $response = @mysqli_query($conn, $query);
         if ($response) {
                $row = mysqli_fetch_array($response);
                $currentm = new Museums($row['ID'], $row['Name'],$row['Year'],$row['Location'],$row['Architects'],$row['History'],$row['Work'],$row['source']);
         echo json_encode($currentm);
        } else echo "not working : " . $query;
}
  function getArt()
        {
require_once('connect.php');
require_once('artwork.php');
        $query = "SELECT * FROM ArtWorks WHERE Title = '" . $_POST['Title'] . "' ;";
        $response = @mysqli_query($conn, $query);
         if ($response) {
                $row = mysqli_fetch_array($response);
                $currentArt = new Artwork($row['ID'], $row['Title'],$row['Year'],$row['Location'],$row['Genres'],$row['Price'],$row['source'],$row['ArtistID'],$row['Paint'],$row['Dimensions']);
         echo json_encode($currentArt);
        } else echo "not working : " . $query;

}
function getArtistWid()
        {
require_once('connect.php');
require_once('artist.php');

        $query = "SELECT * FROM Artists WHERE ID = '" . $_POST['id'] . "' ;";
        $response = @mysqli_query($conn, $query);
         if ($response) {
                $row = mysqli_fetch_array($response);
                $currentArtist = new Artist($row['ID'], $row['Name'],$row['Life'],$row['Lived'],$row['Genre'],$row['Fame'],$row['ArtistSource']);
         echo json_encode($currentArtist);
        } else echo "not working : " . $query;

}

function Search(){
require_once('connect.php');
require_once('artist.php');
require_once('artwork.php');
$search =preg_replace("#[^0-9a-z ]#i", "", $_POST['search']) ;

$query = "SELECT * FROM Artists WHERE Name LIKE '" . $search . "%';";
	$ArtistArray = array();
	$response = @mysqli_query($conn, $query);
	if ($response) 
	{
         	while($row = mysqli_fetch_array($response))
 		{
 			$Artists = new Artist($row['ID'], $row['Name'],$row['Life'],$row['Lived'],$row['Genre'],$row['Fame'],$row['ArtistSource']);
 			array_push($ArtistArray, $Artists);
		}
    } else { echo "no artists found";}
    $query = "SELECT * FROM ArtWorks WHERE Title LIKE '" . $search . "%' ;";
	$ArtArray = array();
	$response = @mysqli_query($conn, $query);
	if ($response) 
	{
         	while($row = mysqli_fetch_array($response))
 		{
 			$Artworks = new Artwork($row['ID'], $row['Title'],$row['Year'],$row['Location'],$row['Genres'],$row['Price'],$row['source'],$row['ArtistID'],$row['Paint'],$row['Dimensions']);
 			array_push($ArtArray, $Artworks);
		}
	
	}else{echo "no ArtWorks found";}

	$Total = array( "Artworks" => $ArtArray, "Artists" => $ArtistArray);
    echo json_encode($Total);

	

}
?>
