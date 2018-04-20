<?php 
 class Artist {
	var $ID;
	var $Name;
	var $Life;   
	var $Lived;  
	var $Genre;
	var $Fame;
	var $ArtistSource;   
	function __construct($ID,$Name,$Life,$Lived,$Genre,
	 $Fame, $ArtistSource ) {
	$this->ID = $ID;
	$this->Name = $Name;
	$this->Life =  $Life;    
	$this->Lived = $Lived;  
	$this->Genre = $Genre;
	$this->Fame =$Fame;
	$this->ArtistSource = $ArtistSource;    
	}

}




	


 


?>
