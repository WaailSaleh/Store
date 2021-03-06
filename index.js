
var json;
var current;
var sArray;
$(document).ready(function() {
});

$("#searchBar").keyup(function() {Search();});
$("#submitSearch").click(function() {Search();});

function Search() {
    var Term = $("#searchBar").val();
    console.log(Term);
    console.log("Search Request Fired ");
    if(Term.length >= 1)
    $.post("database.php",
    {   
        method : "search",
        search : Term 
    },
    function(data){
        console.log(data);
         sArray = $.parseJSON(data);
        $("#results").html(`
            <div id="sArtists">
            <div class="well"><h4> No Artists Were Found By That Name :c</h4></div>
            </div>
            <hr>
            <div id="sArt">
            <h4> No Art Was Found By That Title :c</h4>
            </div>
            `);
        if (sArray.Artworks.length >= 1 ) {
            $("#sArt").html("<ul class='list-group artwork artwork-results'>") 
            for (var i = 0; i < sArray.Artworks.length && i <= 2; i++) {
                    $(".artwork-results").append(`<li class='list-group-item artpiece'>
                        <h4 class="artSelect">` + sArray.Artworks[i].Title  + `</h4>
                    </li>';`);
            }
            $("#sArt").append('</ul>');
        }else {
            $("#sArt").html(`<div class="well"><h4> No Art Was Found By That Title :c</h4></div>`);

        }
        
         if (sArray.Artists.length >= 1 ) {
            $("#sArtists").html("<ul class='list-group artists artist-results'>") 
            for (var i = 0; i < sArray.Artists.length && i <= 2 ; i++) {
                    $(".artist-results").append(`<li class='list-group-item artist'>
                        <h4 class="artistSelect ">` + sArray.Artists[i].Name  + `</h4>
                    </li>';`);
            }
            $("#sArtists").append('</ul>');
        } else 
        {
         $("#sArtists").html(`<div class="well"><h4> No Artist Was Found By That Title :c</h4></div>`);
        }



        });
    
  


}

$("#Search").click(function() {  
 document.getElementById("overlay").style.display = "block";
    $("#sidenav").css("width", "20%");

});

function close() {
    document.getElementById("overlay").style.display = "none";
     $("#sidenav").css("width", "0%");
}
$("#closeSearch").click(function() {
   close();
});


function navmenu() {
    var x = document.getElementById('navstuff');
    if (x.className.includes("naviBar") && !x.className.includes("responsive")) {
        x.className += " responsive";
    } else {
        x.className = x.className.slice(0, -10);

    }
}

$(".artSelect").click(function ArtworkClick() {
   close();
    $(" #right ,#center").hide();
 var  json;
        var n = $(this).text();
console.log(n);
 $.post("database.php",
    {
        Title : n,
        method : "getArt"
    },
    function(data){
        current = jQuery.parseJSON(data);
        console.log(": " + data + "\n ArtWork" + current.Title+"." );
        $(" #right , #center").slideDown();

        if (n  == current.Title) {
               
            $(".Names > h4 ").append(current.Title);
            $(".Genres > h4 ").append(current.Genre);
            $(".Price > h4 ").append(current.Price);
            $("#mainArt").attr("src", current.Source);
        }

    });
    $("#right").html(" <hr>\
        <ul class='list-group artworks'>\
                    <li class='list-group-item Names' onclick='enhanceArtwork()'> \
                        <h4>Name  : </h4>\
                    </li>\
                    <li class='list-group-item Genres'> \
                        <h4>Genres : </h4>\
                    </li>\
                    <li class='list-group-item Price'> \
                        <h4>Price  : </h4>\
                    </li>\
                </ul>\
        ");

    // ins: Date of production, Type of the painting colors,
    //Dimensions of the painting, Location it is currently
    //being saved, Artist name who created it,
    //Price if it is available, and Genres of the painting

    $("#center").html(" <h1 id='center-title'></h1>\
                    <img class='small' id='mainArt' >\
");
    $(" #right , #center").slideDown();
});



$(".artistSelect").click(function ArtistClick() {
close();
    var  json;
        var n = $(this).text();
    $.post("database.php",
    {
        name : n,
        method : "getArtist"
    },
    function(data){
        data = jQuery.parseJSON(data);
        console.log(": " + data + "\n Artist" + data.Name+"." );
        $(" #right , #center").slideDown();

        if (n  == data.Name) {
            $(".Name > h4 ").append(data.Name);
            $(".Genre > h4 ").append(data.Genre);
            $("#mainArt").attr("src", data.ArtistSource);
		current = data;
        }

    });

    $(" #right ,#center").hide();

    $("#right").html("<hr> \
        <h1 id='right-title'> Info </h1>\
        <ul class='list-group artworks'>\
                    <li class='list-group-item Name' onclick='enhanceArtist()'> \
                        <h4>Name : </h4>\
                    </li>\
                    <li class='list-group-item Genre'> \
                        <h4>Genres : </h4>\
                    </li>\
                </ul>\
        ");


    $("#center").html(" <h1 id='center-title'></h1>\
                    <img class='small' id='mainArt' >\
");




});

function enhanceArtwork() {
 close();
    $("#left").hide();
    $("#mainArt").removeClass("small");
    $("#right , #center").removeClass().addClass("col-sm-4");
    $("#center").addClass("col-sm-offset-2");

    $("#right").html("\
        <h1 id='right-title' class='title'> </h1>\
        <ul class='list-group artworks'>\
                    <li class='list-group-item Date'> \
                        <h4>Date : </h4>\
                    </li>\
                    <li class='list-group-item Artistc'> \
                        <h4>Artist : </h4>\
                    </li>\
                    <li class='list-group-item Location'> \
                        <h4>Location : </h4>\
                    </li>\
                    <li class='list-group-item Genres'> \
                        <h4>Genres : </h4>\
                    </li>\
                    <li class='list-group-item Paint'> \
                        <h4>Type of Paint: </h4>\
                    </li>\
                    <li class='list-group-item Dimensions'> \
                        <h4>Dimensions : </h4>\
                    </li>\
                    <li class='list-group-item Price'> \
                        <h4>Price : </h4>\
                    </li>\
                </ul>\
        ");

$.post("database.php",
    {
        id : current.ArtistID,
        method : "getArtistWid"
    },
    function(data){

 console.log(current.ArtistID+" : "+data);
data = jQuery.parseJSON(data);
 $(".Artistc > h4 ").append(data.Name);
});


    $(".Date > h4 ").append(current.Year);
    $(".Price > h4 ").append(current.Price);
    $(".Dimensions > h4 ").append(current.Dimension);
    $(".title").append(current.Title);
    $(".Location > h4 ").append(current.Location);
    $(".Genres > h4 ").append(current.Genre);
    $(".Paint > h4 ").append(current.Paint);

    $(".title").append(`

  <button type="button" class="btn btn-info btn-lg" style='float:right' onclick="purchaseCheck()" data-toggle="modal" data-target="#myModal"> &#x1F6D2</button>


  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"> Purchase The </h4>
        </div>
        <div class="modal-body">
         <form   id="invoice">
         Quantity:
         <input type="number" id="quantity" placeholder="1" onkeyup="calcPrice()" name="quantity" min="1" max="100">
         <hr>
         Shipping: <select name="Shipping" onclick="calcPrice()" id="Shipping" form="invoice">
  <option value="Express">Express</option>
  <option value="Standard">Standard</option>
</select> <hr>
</form>
        </div>
        <div class="modal-footer">
        <h4 id="totalPrice">Price: $45.19CAD</h4>
        <input type="submit" style="float:left" onclick="submitPurchase()" class="btn btn-default btn-success" data-dismiss="modal" form="invoice">
          <button type="button" class="btn btn-default btn-danger " data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
`);
    $(".modal-title").append(current.Title);

}


function purchaseCheck(argument) {
close();
    if ( Cookies.get("ArtInvoices") != null) {
        invoiceObj = Cookies.getJSON("ArtInvoices");
    }
for (var i = 0; i < invoiceObj.Purchases.length; i++) {

    if (current.Title == invoiceObj.Purchases[i].Title) {
        var x = invoiceObj.Purchases[i];
        $(".modal-body").html(`
            <div class="panel panel-success" "id="Purchases-Complete">
                   <div class="panel-heading"> You Have successfully Purchased </div>
                  <div class="panel-body"></div>
                </div>
            `);
        $(".panel-heading").append(x.Quantity +" copies of the "+ x.Title);
        $(".panel-body").append("You Have Been Charged $"+ x.Total.toFixed(2) );
        $(".modal-footer ").hide();

        break;
    }
}

}
var price = 19.99,
    shippingFee, total = 39.99*1.15 , invoiceObj = { "Purchases": [] };

function calcPrice() {
    price = 19.99 * $("#quantity").val();

    if ($("#Shipping option:selected").val() === "Standard") {
        shippingFee = 5;
    } else {
        shippingFee = 20;
    }
    total = shippingFee + price;
    total *= 1.13;
    $("#totalPrice").text("Price: $" + total.toFixed(2) + "CAD");

}

function submitPurchase() {
 close();
    currentInvoice = { Title: current.Title, Total: total, Price: price, Quantity: price / 19.99, Shipping: $("#Shipping option:selected").val(), Date : Date()  };
    invoiceObj.Purchases.push(currentInvoice);
Cookies.set("ArtInvoices",invoiceObj);
}

function enhanceArtist() {
    close();
    $("#left").hide();
    $("#mainArt").removeClass("small");
    $("#right , #center").removeClass().addClass("col-sm-4");
    $("#center").addClass("col-sm-offset-2");

    $("#right").html("\
        <h1 id='right-title' class='artistc'></h1>\
        <ul class='list-group artworks'>\
                    <li class='list-group-item Life'> \
                        <h4>Birth to Death : </h4>\
                    </li>\
                    <li class='list-group-item Lived''> \
                        <h4>Lived in : </h4>\
                    </li>\
                    <li class='list-group-item Genre'> \
                        <h4>Genres : </h4>\
                    </li>\
                    <li class='list-group-item Fame' > \
                        <h4>Famous Works : </h4>\
                    </li>\
                    </li>\
                </ul>\
        ");

    $(".artistc").append(current.Name);
    $(".Life > h4 ").append(current.Life);
    $(".Lived > h4 ").append(current.Lived);
    $(".Genre > h4 ").append(current.Genre);
    $(".Fame > h4 ").append(current.Fame);


}

$(".MSelect").click(function ()  {
   close();
    $(" #right ,#center").hide();
 var  json;
        var n = $(this).text();
console.log(n);
 $.post("database.php",
    {
	method : "muse",
        Name : n
       
    },
    function(data){
        current = $.parseJSON(data);
        console.log(": " + data + "\n ArtWork" + current.Name+"." );
        $(" #right , #center").slideDown();

        if (n  == current.Name) {
               
            $(".Names > h4 ").append(current.Name);
            $(".Est > h4 ").append(current.Year);
            $(".Work > h4 ").append(current.Work);
            $("#mainArt").attr("src", current.Source);
        }

    });
    $("#right").html(" <hr>\
        <ul class='list-group artworks'>\
                    <li class='list-group-item Names' onclick='enhanceM()'> \
                        <h4>Name  : </h4>\
                    </li>\
                    <li class='list-group-item Est'> \
                        <h4>Est : </h4>\
                    </li>\
                    <li class='list-group-item Work'> \
                        <h4>Work  : </h4>\
                    </li>\
                </ul>\
        ");

    // ins: Date of production, Type of the painting colors,
    //Dimensions of the painting, Location it is currently
    //being saved, Artist name who created it,
    //Price if it is available, and Genres of the painting

    $("#center").html(" <h1 id='center-title'></h1>\
                    <img class='small' id='mainArt' >\
");
    $(" #right , #center").slideDown();
});
