<html>

<head>
    <title>CPs 630 Assignment 2  </title>
       <?php include 'metadata.php' ?> 

</head>

<body>
    
    <?php 
        require_once('connect.php');
         include 'navbar.php';
         ?>
<style type="text/css"></style>
<div id="sidenav">

  <a id="closeSearch" class="pull-right"><i class="fa fa-times " aria-hidden="true"></i></a>
  <br>
  
      <div id="searchcontain">
        <input type="text" id="searchBar" placeholder="Search..." name="search">
      <button id="submitSearch" type="submit"><i class="fa fa-search"></i></button>
    </div>
    <div id="results">
    </div>
</div>

    <div class="container-fluid main" style="padding-top: 50px;">
        <div class="row " id="content">
            <div class="col-sm-2 " id="left">
                <h1 id="left-title"></h1>
               <div class="dropdown">
                <button type="button" class="btn btn-primary btn-lg btn-block dropdownbutton ">Art Works</button>
                <div class="dropdowncontent">
                    <ul class="list-group artworks">
                        <?php 
                        $query = "SELECT Title FROM ArtWorks;";
                        $response = @mysqli_query($conn, $query);
                        
                        if ($response) {
                            while($row = mysqli_fetch_array($response)){
                            echo '  <li class="list-group-item artpiece">
                        <h4 class="artSelect">' .$row['Title'] . '</h4>
                    </li>';
                }
            } else echo 'error with response';

                        ?>
                </ul>
                </div>
           </div>
           <hr>
                <div class="dropdown">
                <button type="button" class="btn btn-primary btn-lg btn-block dropdownbutton ">Artists</button>
                <div class="dropdowncontent">
                    <ul class="list-group artists">
                   <?php 
                        $query = "SELECT Name FROM Artists;";
                        $response = @mysqli_query($conn, $query);
                        
                        if ($response) {
                            while($row = mysqli_fetch_array($response)){
                            echo '  <li class="list-group-item artists">
                        <h4 class="artistSelect">' .$row['Name'] . '</h4>
                    </li>';
                }
            } else echo 'error with response';

                        ?>
                </ul>
                </div>
           </div>
           <hr>
                <div class="dropdown">
                <button type="button" class="btn btn-primary btn-lg btn-block dropdownbutton ">Museums</button>
                <div class="dropdowncontent">
                    <ul class="list-group Museum">
                    <?php 
                        $query = "SELECT Name FROM Museums ;";
                        $response = @mysqli_query($conn, $query);
                        if ($response) {
                            while($row = mysqli_fetch_array($response)){
                            echo '  <li class="list-group-item Museum">
                        <h4 class="MSelect">' .$row['Name'] . '</h4>
                    </li>';
                }
            } else echo 'error with response';?>

                </ul>
                </div>
           </div>
           
            </div>
            <div class="col-sm-2"  id="center">
               
                <h1 id="center-title" > </h1>
                

            </div>
            <div class="col-sm-3" id="right">
                <h1 id="right-title" > </h1>
                
            </div>
        </div>
    </div>
    

<div id="overlay"></div>
    <div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
        <script src="index.js"></script>
    </div>
</body>

</html>

