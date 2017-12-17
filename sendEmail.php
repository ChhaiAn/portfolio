<?php
    if(isset($_POST['action'])){
       $fullname = $_POST['fullname'];
       $email = $_POST['email'];
       $message = $_POST['message'];

        $body = "Thank you, ".$fullname." for your interest in my work.I will reply to you as soon as possible.";
        mail($email, 'Thank you',
        $body, 'From: chhaily_an.com');


    }


?>



<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">

    <!-- Compiled and minified CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

    <link rel="stylesheet" href="css/fontawesome.min.css">

      <!-- CUSTOMIZE CSS -->
      <link rel="stylesheet" href="css/style.css">
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <script src="https://use.fontawesome.com/779d0dc147.js"></script>

  </head>

  <body id="home">
<!-- NAVIGATION -->

<nav class="my-nav-wrapper z-depth-2">
<div class="container">
  <div class="nav-wrapper ">
    <a href="index.html" class="brand-logo center">
      <img class="my-nav-logo" src="images/icon/mylogo1.svg" alt="">
    </a>
  </div>
</div>
</nav>
<div class="container">
  <div class="center">
    <h3>Thank You <?php echo "<span class='messenger'>$fullname</span>"?>, for your interest in my work. I will reply to you as soon as possible.</h3>
  </div>
</div>
<div class="center" style="margin-top: 10vh">
  <a class="scroll-link" href="index.html" style="color: white"><i class="material-icons large float" >insert_emoticon</i></a>
</div>


<!--Import jQuery before materialize.js-->
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
<script src="js/main.js"></script>
  </body>
</html>
