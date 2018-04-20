
<?php
 class Artwork {
        var $ID;
        var $Title;
        var $Year;
        var $Location;
        var $Genre;
        var $Price;
        var $Source;
        var $ArtistID;
        var $Paint;
        var $Dimension;
        function __construct($ID,$Title,$Year,$Location,$Genre,
         $Price, $Source, $ArtistID, $Paint, $Dimension) {
        $this->ID = $ID;
        $this->Title = $Title;
        $this->Year =  $Year;
        $this->Location = $Location;
        $this->Genre = $Genre;
        $this->Price =$Price;
        $this->Source = $Source;
        $this->ArtistID = $ArtistID;
        $this->Paint = $Paint;
        $this->Dimension = $Dimension;
        }



}




      





?>

