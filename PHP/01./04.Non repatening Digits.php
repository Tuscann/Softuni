<?php
/**
 * Created by PhpStorm.
 * User: az
 * Date: 12/16/16
 * Time: 2:05 PM
 */

$n = 194;

$str = "";

if ($n < 100) {
    echo "no";
} else if ($n >= 100) {
    for ($i = 100; $i <= $n; $i++) {
        $i = (string)$i;
        if ($i >= 1000) {
            break;
        }

        $first = $i[0];
        $secoundd = $i[1];
        $third = $i[2];

        if ($first != $secoundd) {
            if ($third != $secoundd) {
                if ($third != $first) {
                    $str.= $i . ", ";
                }
            }
        }
    }
    $trimmed = trim($str, ", ");



    echo $trimmed;
}



