<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>title</title>

 <?php include 'metadata.php' ?>
      
</head>

<body>


  
    <?php 
     require_once('connect.php');
         include 'navbar.php';
         ?>
         <div id="sidenav">

  <a id="closeSearch" class="pull-right"><i class="fa fa-times " aria-hidden="true"></i></a>
  <br>
  
      <div id="searchcontain">
      <div class="DBChoice well" id="Artists">Artists</div>
      <div class="DBChoice well"  id="ArtWorks" >ArtWorks</div>
      <div class="DBChoice well"  id="Museums" >Museums</div>
    </div>
  
</div>
    <div id="main" class="container">
       </div>
    <div id="overlay"></div>
    <script src="JSON-to-Table.min.1.0.0.js"></script>


  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
     <script src="index.js"></script>
      <script src="crud.js"></script>
</body>




</html>
