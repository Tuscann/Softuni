<?php
/**
 * Created by PhpStorm.
 * User: az
 * Date: 12/16/16
 * Time: 3:04 PM
 */

function getSaturdayss($y, $m)
{
    return new DatePeriod(
        new DateTime("first saturday of $y-$m"),
        DateInterval::createFromDateString('next Saturday'),
        new DateTime("last day of $y-$m")
    );
}

foreach (getSaturdayss(2016, 12) as $saturays) {
    echo $saturays->format("jS F,Y");
    echo "<br>";

}


