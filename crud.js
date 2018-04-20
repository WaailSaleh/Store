var table, Headers;
$(document).ready(function() {
$.post("artistTable.php",
    function(data){
    	console.log(data);
    	table = data;
   $("#main").html(table);
});

});

$("#Artists").click(function() {
	close();
	$.post("artistTable.php",
    function(data){
    	console.log(data);
    	table = data;
 		$("#main").html(table);
});
});	
$("#ArtWorks").click(function() {
		close();
		console.log("hi");
	$.post("artworkTable.php",
    function(data){
    	console.log(data);
    	table = (data);
 		$("#main").html(table);
});
});
$("#Museums").click(function() {
		close();
	$.post("museumTable.php",
    function(data){
    	console.log(data);
    	table = (data);
 		$("#main").html(table);
});
});


