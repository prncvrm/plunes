<!--
## plunes intern assignment objective : 5
## author : Prince Verma
## date : 02/06/18 03:44:00
## version : 1.0
## listing down the processes running on my linux system
-->
<html>
<head>
    <title>Plunes Objective 5</title>
     <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
</head>
<body>
	   	
<div class="container">
  <h2>Processes Running</h2>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>User</th>
        <th>PID</th>
		<th>%CPU</th>
        <th>%Mem</th>
        <th>Start</th>
        <th>Command/Process</th>
      </tr>
    </thead>
    <tbody>
    <?php
	exec('ps aux', $output);
	array_shift($output);//removing headers
	foreach($output as $op){
		$data=preg_split("/[\s]+/", $op);
		?>
		<tr>
			<td><?=$data[0]?></td>
			<td><?=$data[1]?></td>
			<td><?=$data[2]?></td>
			<td><?=$data[3]?></td>
			<td><?php echo($data[8]);echo(" ");echo($data[9])?></td>
			<td><?=$data[10]?></td>
		</tr>
		<?php
	}
	?>
      
    </tbody>
  </table>
</div>


</body>
</html>