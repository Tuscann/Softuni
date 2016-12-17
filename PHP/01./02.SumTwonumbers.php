<?php

$firstNumber = 1234.5678;
$secoundNumber = 333;
$sum = $firstNumber + $secoundNumber;

echo "\$firstNumber + \$secoundNumber = {$firstNumber} + {$secoundNumber} = ";
$s = sprintf('%0.2f', $sum);
echo $s;