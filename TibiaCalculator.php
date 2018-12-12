<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tibia Calculator</title>
</head>
<body>

<?php 

$player1 = isset($_GET["p1"])?$_GET["p1"]:0;
$player2 = isset($_GET["p2"])?$_GET["p2"]:0;
$player3 = isset($_GET["p3"])?$_GET["p3"]:0;
$player4 = isset($_GET["p4"])?$_GET["p4"]:0;

$loot = isset($_GET["loot"])?$_GET["loot"]:0;

$hunt = isset($_GET["huntopt"])?$_GET["huntopt"]:3;

switch($hunt){
    case 1:
    $gastos = ($player1 + $player2);
    $div = ($loot - $gastos) / 2;
    break;

    case 2:
    $gastos = ($player1 + $player2 + $player3);
    $div = ($loot - $gastos) / 3;
    break;
    
    case 3:
    $gastos = ($player1 + $player2 + $player3 + $player4); 
    $div = ($loot - $gastos) / 4;
}
Echo "A hunt deu $div para cada um.";

?>
<br>
<button><a href="TibiaCalculator.html"> Calcular novamente </a></button>
</body>
</html>