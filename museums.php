<?php 
 class Museums {
	var $ID;
	var $Name;
	var $Year;   
	var $Location;  
	var $Architects;
	var $History;
	var $Work;   
	var $Source;  
	function __construct($ID,$Name,$Year,$Location,$Architects,
	 $History, $Work, $Source; ) {
	$this->ID = $ID;
	$this->Name = $Name;
	$this->Year =  $Year;    
	$this->Location = $Location;  
	$this->Architects = $Architects;
	$this->History =$History;
	$this->Work = $Work;
	$this->Source =$Source;   
	}

}
?>
    