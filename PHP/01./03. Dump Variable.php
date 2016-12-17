<?php
/**
 * Created by PhpStorm.
 * User: az
 * Date: 12/16/16
 * Time: 1:05 PM
 */
$az=["hello",15,1.234,array(1, 2, 3),(object)[2,34]];

//$strings = "hello";
//$number = 15;
//$double = 1.234;
//$arrayy = array(1, 2, 3);
//$object=(object)[2,34];


foreach ($az as $value) {
    if (is_numeric($value) == false) {
        echo gettype($value)."<br>";
    } else if (is_numeric($value) == true) {
        var_dump($value);
        echo "<br>";

    }
}


