<!--
## plunes intern assignment objective : 3
## author : Prince Verma
## date : 02/06/18 03:10:00
## version : 1.0
## done as per the given json file
-->
<!DOCTYPE html>
<html>
<head>
    <title>Plunes Objective 3 :: php</title>
     <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
</head>
<body>
    <?php
    error_reporting(E_ALL); ini_set('display_errors', '1');
    $json=file_get_contents("json.txt");
    $data =  json_decode($json);
?>
<div class="container">
  <h1>Name : <?=$data->name?></h1>
  <h4>id : <?=$data->id?> || PPU : <?=$data->ppu?></h4>
  <?php if(count($data->batters)){?>            
  <table class="table table-striped">
    <h3>Batters<h3>
    <thead>
      <tr>
        <th>Id</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
     <?php foreach($data->batters->batter as $elt){?>
      <tr>
        <td><?=$elt->id?></td>
        <td><?=$elt->type?></td>
      </tr>
      <?php }?>
    </tbody>
  </table>
  <?php }?>

  <?php if(count($data->topping)){?>            
  <table class="table table-striped">
    <h3>Topping<h3>
    <thead>
      <tr>
        <th>Id</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
     <?php foreach($data->topping as $elt){?>
      <tr>
        <td><?=$elt->id?></td>
        <td><?=$elt->type?></td>
      </tr>
      <?php }?>
    </tbody>
  </table>
  <?php }?>


</div>


</body>
</html>
