<?php

$a = rand(1, 11);
$b = rand(1, 11);

echo "\$a = ", $a, "  \$b = ", $b,"<br/>";


if ($a > $b) {
    print("\$a{$a} > \$b{$b}");
} else if ($a < $b) {
    print("\$a{$a} < \$b{$b}");
} else if ($a == $b) {
    echo "{$a} == {$b}";
}


?>


