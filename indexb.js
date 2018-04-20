 var json;
var current;
$(document).ready(function() {



    json = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "Artworks.json",
            'dataType': "json",
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })();


});




function navmenu() {
    var x = document.getElementById('navstuff');
    if (x.className.includes("naviBar") && !x.className.includes("responsive")) {
        x.className += " responsive";
    } else {
        x.className = x.className.slice(0, -10);

    }
}

$(".artpiece").click(function ArtworkClick() {
    $(" #right ,#center").hide();


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


    for (var i = 0; i < json.Artworks.length; i++) {

        if ($(this).text().trim() === json.Artworks[i].Title.trim()) {
            current = json.Artworks[i];
            $(".Names > h4").append(json.Artworks[i].Title);
            $(".Price > h4 ").append(json.Artworks[i].Price);;

            $(".Genres > h4 ").append(json.Artworks[i].Genres);




            $("#mainArt").attr("src", json.Artworks[i].source);

            break;
        }
    }

    $(" #right , #center").slideDown();
});



$(".artist").click(function ArtistClick() {

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
   /* for (var i = 0; i < json.Artists.length; i++) {

        if ($(this).text().trim() === json.Artists[i].Name) {
            current = json.Artists[i];
            $(".Name > h4 ").append(json.Artists[i].Name);
            $(".Genre > h4 ").append(json.Artists[i].Genre);
            $("#mainArt").attr("src", json.Artists[i].source);
            break;
        }

    }
    
   var n = $(this).text();
       $.ajax({

            'url': "artist.php",
            'async': true,
            'global': false,
            'type': 'POST',
            'dataType' : 'json',
            'data' :{ 'name': n, 'method':'getArtist' },
            'success': function(data) {
            $(".Name > h4 ").append(data.Name);
            $(".Genre > h4 ").append(data.Genre);
            $("#mainArt").attr("src", data.ArtistSource);

            }
        });*/
json = (function() {
        var json = null;
        $.ajax({
            async: false,
            global: false,
            url: "artist.php",
            dataType: "json",
            data :{ name:$(this).text(), method:"getArtist" },
            success: function(data) {
                json = data;
            }
        })done(function(){
    alert( "Data Saved: "  );});

        return json;
    })();

    $(" #right , #center").slideDown();
});

function enhanceArtwork() {  
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


    $(".Date > h4 ").append(current.Year);
    $(".Artistc > h4 ").append(current.Artist);
    $(".Price > h4 ").append(current.Price);
    $(".Dimensions > h4 ").append(current.Dimensions);
    $(".title").append(current.Title);
    $(".Location > h4 ").append(current.Location);
    $(".Genres > h4 ").append(current.Genres);
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
            `)
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
    currentInvoice = { Title: current.Title, Total: total, Price: price, Quantity: price / 19.99, Shipping: $("#Shipping option:selected").val(), Date : Date()  };
    invoiceObj.Purchases.push(currentInvoice);
Cookies.set("ArtInvoices",invoiceObj);
}

function enhanceArtist() {
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