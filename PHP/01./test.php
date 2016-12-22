<!DOCTYPE html>
<html>
<head>
    <title>Select Multiple</title>
</head>
<body>
<h3>Select Trainers for PHP Course:</h3>

<form method="get">
    <div>Operation:
        <select name="operation">
            <option value="sum">Sum</option>
            <option value="subtract">Subtract</option>
        </select>
    </div>
    <div>Number 1:
        <input type="text" name="number_one"/>
    </div>
    <div>Number 2:
        <input type="text" name="number_two"/>
    </div>
    <div>
        <input type="submit" name="calculate" value="Calculate!">
    </div>
</form>


<form method="get">
    <div>Beer:
        <input type="radio" name="drink" value="beer"><br>
    </div>
    <div>Rakiya
        <input type="radio" name="drink" value="rakiya"><br>
    </div>
    <div>
        <input type="submit">
    </div>
</form>


<h4>
    <?php
  if (isset($_GET['drink'])){
      echo "Your drink is: " . $_GET['drink'];
  }
    ?>
</h4>
</body>
</html>