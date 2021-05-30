<html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        Jeff Lombard
    </title>

    <!-- Bootstrap -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/main.css" rel="stylesheet">
    
    <!-- Jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>    <body>
        <div class = "maincontainer">
            <div class ="container pagedescription">
                <h1>fizz buzzer</h1>
                <p>fill out the form and fizz buzzer will generate a page based on the integers you supply</p>
                <form action="fizzbuzz.php" method="get">
                    <label for="zero">Zero Value:</label>
                    <input type="text" name="zero" size="40" placeholder="optional"><br>
                    <label for="fizz">Fizz:</label>
                    <input type="number" name="fizz" placeholder="multiple for fizzes"><br>
                    <label for="buzz">Buzz:</label>
                    <input type="number" name="buzz" placeholder="multiple for buzzes"><br>
                    <label for="startingInt">Starting Integer:</label>
                    <input type="number" name="startingInt"><br>
                    <label for="endingInt">Ending Integer:</label>
                    <input type="number" name="endingInt"><br>
                    <input type="submit" value="buzz buzz">
                </form>
            </div>
            <div class="container">
                <a href="fizzbuzzsource.rtf">download text source</a>
            </div>
        </div>
            
                    </body>
                </html>