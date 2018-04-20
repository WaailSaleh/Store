<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Report </title>
     <?php include 'metadata.php' ?> 
</head>
<body>

    <?php include 'navbar.php' ?> 

    <div class="container" >
        <div class="row">
        <div class=" col-sm-6 col-sm-offset-3"> <h1 class=" Jumbotron">Technical Report</h1></div>
        </div>
       
    <div class="row">
        
   
        <div class="panel-group col-sm-4" >
            <div class="panel panel-default">
                <div class="panel-heading">

                   1-The main page of the system (Home) 
                </div>
                <div class="panel-body"> This part of the Page Was Crafted using bootstrap specifically to implement the navbar and dropdown lists, it was coupled with css and a color pallete we got from a random color pallete generator </div>
            </div>
            </div>

        <div class="panel-group col-sm-4">
            <div class="panel panel-default">
                <div class="panel-heading">

                    2- artwork responsiveness
                </div>
                <div class="panel-body">
                    This was done using Jquery selectors to add listeners and then to use predefined cols to fill and format information to the screen. Css helped us make the images fixed although theres distortions due to dimensions
                </div>
            </div>
        </div>

        <div class="panel-group col-sm-4">
            <div class="panel panel-default">
                <div class="panel-heading">

                    3- artwork focus
                </div>
                <div class="panel-body">
                            this feature was implemented by manipulating the DOM and deleting the leftmost col and increasing the size of the right and middle col, then injecting html into the page once more to update the necessary information fields
                </div>
            </div>
        </div>
        </div>

        <div class="row">


            <div class="panel-group col-sm-4">
                <div class="panel panel-default">
                    <div class="panel-heading">

                        4- Artist Responsiveness 
                    </div>
                    <div class="panel-body">
                             This was done using Jquery selectors to add listeners and then to use predefined cols to fill and format information to the screen. Css helped us make the images fixed although theres distortions due to dimensions
                    </div>
                </div>
            </div>

            <div class="panel-group col-sm-4">
                <div class="panel panel-default">
                    <div class="panel-heading">

                        5- Artist Focus
                    </div>
                    <div class="panel-body"> this feature was implemented by manipulating the DOM and deleting the leftmost col and increasing the size of the right and middle col, then injecting html into the page once more to update the necessary information fields</div>
                </div>
            </div>

            <div class="panel-group col-sm-4">
                <div class="panel panel-default">
                    <div class="panel-heading">

                        6- Shopping cart functionality 
                    </div>
                    <div class="panel-body">This Feature took the longest to develop and was implemented via the use of cookies through JQuery methods since thats what kept the code the cleanest. it works by adding a button which spawns a modal that contains either the form for purchase or the invoice data based on the values present in the users cookies</div>
                </div>
            </div>
        </div>


        </div>


    <div >
        <script src="index.js"></script>
    </div>
</body>
</html>